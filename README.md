# Requests




# Development
## buid and run the site
```
docker-compose up --build
```

- code from $(pwd) gets mounted into the containers weboot.
- site is accessable from localhost:8080
- mysql container is started up and accessable from within the app via the MYSQL_USER, MYSQL_DB, MYSQL_HOST, and MYSQL_PASSWORD env variables 


## Shut it down 
```
docker-compose down
```

## extensions 
php extensions are installed via the https://github.com/mlocati/docker-php-extension-installer project. 

Add the extension you want into the dockerfile, and then re-run docker-compose up --build 

i.e

```
...
RUN docker-php-ext-install \
    mysqli \
    ldap
```

## run a shell in the container 
```
docker-compose exec php bash
```

## connect to the database
host: localhost
port: 3306
username: root
password: request (or the value of MYSQL_ROOT_PASSWORD)




