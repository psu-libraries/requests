<?php

if (!isset($_SESSION['devEmail'])):
      $_SESSION['devEmail'] = 'wse1@psu.edu';
endif;

if (!isset($_SESSION['user']) && isset($_SERVER['REMOTE_USER'])):
      $_SESSION['user'] = $_SESSION['REMOTE_USER'];
elseif (!isset($_SESSION['user']) && !isset($_SESSION['REMOTE_USER'])): // For development only. Remove for production.
      $_SESSION['user'] = 'wse1';
endif;
?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport"
            content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no" />

      <title>University Libraries Travel Request Form</title>

      <link rel="stylesheet" href="../pagelayout/css/foundation.css">
      <link rel="stylesheet" href="../pagelayout/css/app.css">
  </head>

  <body>
    <div>
      <a href="#main-content" class="show-on-focus">
        Skip to main content
      </a>
    </div>
    <header>
      <div class="l-header">
        <header id="branding" role="banner">
            <h1 class="site-name-title"><?php echo $appName; ?></h1>
        </header>
      </div>
    </header>

    <div class="top-bar">
      <?php if (!empty($cssSearch)): ?>
        <button type="button"
                class="menu-icon hide-for-medium"
                data-toggle="searchForm"></button>
      <?php endif;?>

      <nav class="hover-underline-menu">
        <ul class="menu align-center">

          <?php foreach ($arrTabs as $tkey => $tvalue) : ?>
            <li class="<?php echo $tvalue['class']; ?>">
              <a href="<?php echo $tvalue['url']; ?>">
                <?php echo $tvalue['title']; ?>
              </a>
            </li>
          <?php endforeach; ?>

        </ul>
      </nav>
    </div>

    <div role="document" class="page">
      <main role="main" id="main-content"
            class="grid-container l-main" tabindex="0">
<?php

        require_once "../vendor/autoload.php";
        require_once "../src/functions/fncUtility.php";

        require_once "src/database/connection.php";
        require_once "../src/database/connect.php";
