<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sujin Jeong - Portfolio</title>
    <link href="css/common.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="js/common.js"></script>
</head>
<body>
<header>
    <div>
        <div class="headerLeft">
            <a href='/index.php' class="logo header_eng">SUJIN JEONG</a>
            <nav class="gnb">
                <ul>
                    <li><a href='/work.php' class="header_eng">Work</a></li>
                    <li><a href='/about.php' class="header_eng">About</a></li>
                    <li><a href='#' class="header_eng">Contact</a></li>
                </ul>
            </nav>
        </div>
        
        <a href='#' class="menu-trigger">
            <span></span>
            <span></span>
            <span></span>
        </a>

        <div class="back_btn">
            <a href='#'>BACK</a>
        </div>
    </div>
</header>

<div class="slide_menu">
    <div class="inner">
        <ul>
            <li><a href='work.php' class="menu_eng">Work.<h4>(AND PLAY)</h4></a></li>
            <li><a href='about.php' class="menu_eng">About.<h4>JEONGSUJIN</h4></a></li>
            <li><a href='#' class="menu_eng">Contact.<h4>I'D LOVE TO HEAR FROM YOU</h4></a></li>
        </ul>
        <a href='#' class="close_btn">
            <span></span>
            <span></span>
        </a>
    </div>
</div>

<a href='#' class="project_list">
    <div class="btn">
        <span></span>
        <p class="listBtn">PROJECT LIST</p>
    </div>
</a>

<div class="projects_wrap">
    <div class="projects">
        <div class="project_title">
            <a href='../project/krispykreme.php'><h2 class="krispy title_eng">KRISPY KREME DOUGHNUT
                <img src="/img/project_krispy.jpg" alt="krispy">
            </h2></a>
            <a href='../project/yuhankimberly.php'><h2 class="yk title_eng">YUHAN KIMBERLY
                <img src="/img/project_yuhankimberly.jpg" alt="yuhankimberly">
            </h2></a>
            <a href='../project/athomeworkouts.php'><h2 class="ahw title_eng">AT HOME WORKOUTS
                <img src="/img/project_workouts.jpg" alt="athomeworkouts">
            </h2></a>
        </div>
    </div>
</div>

<div class="popup_contact">
    <div class="popup_wrap">
        <div class="contact">
            <div class="inner">
                <div class="contact_top">
                    <h2>LET'S MAKE SOMETHING</h2>
                </div>
                <div class="contact_body">
                    <div class="profile">
                        <h2>Jeong Sujin</h2>
                        <p>010. 9060. 0771</p>
                        <p>sueiz0770@gmail.com</p>
                    </div>
                    <form action="../php/contact_request.php" method="">
                        <table>
                            <tr><td><input type="text" name="name" placeholder="Your Name"></td></tr>
                            <tr><td><input type="email" name="email" placeholder="Your Mail"></td></tr>
                            <tr><td><input type="phone" name="phone" placeholder="Your Number"></td></tr>
                            <tr><td><textarea name="message" placeholder="Message"></textarea></td></tr>
                            <tr>
                                <td>
                                    <input type="submit" value="SEND">
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
            <a href='#' class="popup_close">
                <span></span>
                <span></span>
            </a>
        </div>
    </div>
    
    
</div>

</body>
</html>