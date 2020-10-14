FROM php:7.4.11-apache-buster

RUN sed -i 's/\:80/:8080/1' /etc/apache2/sites-enabled/000-default.conf
RUN sed -i 's/80/8080/g' /etc/apache2/ports.conf

RUN adduser app --home /home/app --gid 33 --system
COPY bin/startup /usr/local/bin/

# PHP extensions
RUN docker-php-ext-install \
    mysqli
   

RUN chown -R app /var/www/html
RUN chmod -R 755 /var/www/html

COPY --chown=app:www-data . /var/www/html

USER app

CMD ["/usr/local/bin/startup"]


