FROM php:7.4.11-apache-buster

# Install system dependencies
RUN apt-get update \
  && apt-get --no-install-recommends install -y \
  wget \
  libzip-dev \
  unzip \
  && rm -rf /var/lib/apt/lists/*

COPY bin/install_composer.sh /usr/local/bin/install_composer.sh
RUN /usr/local/bin/install_composer.sh

RUN sed -i 's/\:80/:8080/1' /etc/apache2/sites-enabled/000-default.conf
RUN sed -i 's/80/8080/g' /etc/apache2/ports.conf

RUN adduser app --home /home/app --gid 33 --system
COPY bin/startup /usr/local/bin/

# PHP extensions
RUN docker-php-ext-install \
    mysqli \
    zip

COPY composer.json composer.lock /var/www/html/
RUN chown -R app /var/www/html
RUN chmod -R 755 /var/www/html

RUN composer install

COPY --chown=app:www-data . /var/www/html

USER app

CMD ["/usr/local/bin/startup"]


