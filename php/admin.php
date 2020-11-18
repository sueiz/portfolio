<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>

<?
    include_once "db.php";
    $query = "select * from contact";
    $result = mysqli_query($db,$query);
?>

<article>
    <h2>LOGIN</h2>
    <div>
    <p>
        <input type="text" name="id">
        <input type="password" name="pw">
        <a href="#" class="login">로그인</a>
    </p>
    </div>
</article>

<table>
    <thead>
        <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>E-MAIL</th>
            <th>PHONE</th>
            <th>MESSAGE</th>
        </tr>
    </thead>
    
    <tbody>
       <?  while( $row = mysqli_fetch_array($result) ){  ?>
        <tr>
            <td><?=$row['num']?></td>
            <td><?=$row['name']?></td>
            <td><?=$row['email']?></td>
            <td><?=$row['phone']?></td>
            <td><?=$row['message']?></td>
        </tr>
        <? } ?>
        
    </tbody>
</table>

<style>
    article {
        margin: 0 auto;
    }
    table {
        width: 60%;
        margin: 0 auto;
    }
    
    th {
        background: #e1e1e1;
        padding: .5rem;
    }
    
    td {
        border: 1px solid #e1e1e1;
        text-align: center;
        padding: .3rem;
    }
    
    </style>

</body>
</html>
