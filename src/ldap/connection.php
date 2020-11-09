<?php

// LDAP variables
$ldapuri = "https://389test.vmhost.psu.edu:389";

$ldapconn = ldap_connect($ldapuri) or die("That LDAP-URI was not parseable");
