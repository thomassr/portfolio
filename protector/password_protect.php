<?php

###############################################################
# Page Password Protect 2.13
###############################################################
# Visit http://www.zubrag.com/scripts/ for updates
############################################################### 
#
# Usage:
# Set usernames / passwords below between SETTINGS START and SETTINGS END.
# Open it in browser with "help" parameter to get the code
# to add to all files being protected. 
#    Example: password_protect.php?help
# Include protection string which it gave you into every file that needs to be protected
#
# Add following HTML code to your page where you want to have logout link
# <a href="http://www.example.com/path/to/protected/page.php?logout=1">Logout</a>
#
###############################################################

/*
-------------------------------------------------------------------
SAMPLE if you only want to request login and password on login form.
Each row represents different user.

$LOGIN_INFORMATION = array(
  'zubrag' => 'root',
  'test' => 'testpass',
  'admin' => 'passwd'
);

--------------------------------------------------------------------
SAMPLE if you only want to request only password on login form.
Note: only passwords are listed

$LOGIN_INFORMATION = array(
  'root',
  'testpass',
  'passwd'
);

--------------------------------------------------------------------
*/

##################################################################
#  SETTINGS START
##################################################################

// Add login/password pairs below, like described above
// NOTE: all rows except last must have comma "," at the end of line
$LOGIN_INFORMATION = array(
  'Welcome23'
);

// request login? true - show login and password boxes, false - password box only
define('USE_USERNAME', false);

// User will be redirected to this page after logout
define('LOGOUT_URL', 'http://www.thomasruitenberg.nl/');

// time out after NN minutes of inactivity. Set to 0 to not timeout
define('TIMEOUT_MINUTES', 5);

// This parameter is only useful when TIMEOUT_MINUTES is not zero
// true - timeout time from last activity, false - timeout time from login
define('TIMEOUT_CHECK_ACTIVITY', true);

##################################################################
#  SETTINGS END
##################################################################


///////////////////////////////////////////////////////
// do not change code below
///////////////////////////////////////////////////////

// show usage example
if(isset($_GET['help'])) {
  die('Include following code into every page you would like to protect, at the very beginning (first line):<br>&lt;?php include("' . str_replace('\\','\\\\',__FILE__) . '"); ?&gt;');
}

// timeout in seconds
$timeout = (TIMEOUT_MINUTES == 0 ? 0 : time() + TIMEOUT_MINUTES * 60);

// logout?
if(isset($_GET['logout'])) {
  setcookie("verify", '', $timeout, '/'); // clear password;
  header('Location: ' . LOGOUT_URL);
  exit();
}

if(!function_exists('showLoginPasswordProtect')) {

// show login form
function showLoginPasswordProtect($error_msg) {
?>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Thomas Ruitenberg">
    <title>Thomas' Portfolio: Enter Password</title>
    
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
    <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
    
        <!-- Base Core -->
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/core.css">
        <!-- Base Common -->
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/code.css">
    
        <!-- Add Your Website / App Stylesheet -->
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="stylesheet" href="/css/passprotection.css">
        <link rel="stylesheet" href="/css/fonts.css">

        <script defer src="/scripts/script.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    
        
    
        <!-- Add Additional Modules -->
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/containers.css">
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/grid.css">
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/horizontal-spacers.css">
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/vertical-spacers.css">
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/spacers.css">
        <link rel="stylesheet" href="https://unpkg.com/@getbase/base/typography-helpers.css">

</head>

<body style="background: var(--black); color: var(--white);">
    <style>

    </style>
    <div class="container">
        <h3 class="text-center">To check this project you need a password</h3>
            <div class="form padding-top-2rem-m">
                <form method="post" class="login-form">
    
                    <?php if (USE_USERNAME) echo '<input type="input" placeholder="username" name="access_login" /><br/>'; ?>
                    <input type="password" placeholder="enter password here" name="access_password" autofocus />
                    <font style="font-family: 'Satoshi', sans-serif;" color="red">
                        <?php echo $error_msg; ?>
                    </font>
                    
                    <div class="padding-top-2rem">
                        <button class="btn btn-white" type="submit" name="Submit" value="Enter">continue <div class="icon baseline">
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="arrow-left-solid-icon">
                                <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M28 16L19.7693 24L18.5648 22.8293L24.7393 16.8278L4 16.8278L4 15.1722L24.7393 15.1722L18.5648 9.17074L19.7693 8L28 16Z"/>
                                </g>
                                </svg>
                        </div></button>
                        </div>
                </form>
                
            </div>
            
            <div class="padding-top-5rem-m form">
            

            <a class="btn btn-white mail" style="border: 0px" href="mailto:hoi@ruitenberg.nl?subject=Password please!" target="_blank"
                        rel="noopener noreferrer">ask me for the password</a>
                    </div>
    </div>
    
</body>

</html>

<?php
  // stop at this point
  die();
}
}

// user provided password
if (isset($_POST['access_password'])) {

  $login = isset($_POST['access_login']) ? $_POST['access_login'] : '';
  $pass = $_POST['access_password'];
  if (!USE_USERNAME && !in_array($pass, $LOGIN_INFORMATION)
  || (USE_USERNAME && ( !array_key_exists($login, $LOGIN_INFORMATION) || $LOGIN_INFORMATION[$login] != $pass ) ) 
  ) {
    showLoginPasswordProtect("incorrect password");
  }
  else {
    // set cookie if password was validated
    setcookie("verify", md5($login.'%'.$pass), $timeout, '/');
    
    // Some programs (like Form1 Bilder) check $_POST array to see if parameters passed
    // So need to clear password protector variables
    unset($_POST['access_login']);
    unset($_POST['access_password']);
    unset($_POST['Submit']);
  }

}

else {

  // check if password cookie is set
  if (!isset($_COOKIE['verify'])) {
    showLoginPasswordProtect("");
  }

  // check if cookie is good
  $found = false;
  foreach($LOGIN_INFORMATION as $key=>$val) {
    $lp = (USE_USERNAME ? $key : '') .'%'.$val;
    if ($_COOKIE['verify'] == md5($lp)) {
      $found = true;
      // prolong timeout
      if (TIMEOUT_CHECK_ACTIVITY) {
        setcookie("verify", md5($lp), $timeout, '/');
      }
      break;
    }
  }
  if (!$found) {
    showLoginPasswordProtect("");
  }

}

?>
