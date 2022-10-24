<?php
    include "../connect/connect.php";
    include "../connect/session.php";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 사이트 만들기</title>
    
    <?php
        include "../include/link.php";
    ?>
</head>
<body>
    <div id="skip">
        <a href="#header">헤더 영역 바로가기</a>
        <a href="#main">컨텐츠 영역 바로가기</a>
        <a href="#footer">푸터 영역 바로가기</a>
    </div>
    <!-- // skip -->
    
    <?php include "../include/header.php";?>
    <!-- // header -->

    <main id="main">
        <section id="blogSearch" class="container">
            <h2>개발과 관련된 블로그 입니다.</h2>
            <div class="blog__search">
                <form action="blogSearch.php" method="post">
                    <fieldset>
                        <legend>블로그 서치</legend>
                        <label for="searchKeyword"></label>
                        <input type="text" id="searchKeyword" name="searchKeyword" placeholder="검색어를 입력해주세요!">
                        <button class="btn">검색하기</button>
                    </fieldset>
                </form>
            </div>
        </section>
        <!-- // blogSearch -->

        <section id="card" class="container">
            <h2>topic</h2>
            <a href="blogWrite.php" style="float:right; margin-top:20px;">글쓰기</a>
            <div class="card__inner">
                <?php
                    $sql = "SELECT * FROM myBlog WHERE blogDelete = 0 ORDER BY myBlogID DESC;";
                    $result = $connect -> query($sql);

                    foreach($result as $blog) { ?>
                        <div class="card">
                            <figure>
                                <img src="../asset/img/blog/<?=$blog['blogImgFile']?>" alt="카드1번">
                                <a href="blogView.php?blogID=<?=$blog['myBlogID']?>" class="go" title="컨텐츠 바로가기"></a>
                            </figure>
                            <div>
                                <a href="blogView.php?blogID=<?=$blog['myBlogID']?>">
                                    <h3><?=$blog['blogTitle']?></h3>
                                    <p><?=$blog['blogContents']?></p>
                                </a>
                            </div>
                            <span class="cate"><?=$blog['blogCategory']?></span>
                        </div>
                    <?php
                    }
                    ?>
                <!-- // card01 -->
            </div>
        </section>
        <!-- // card -->
    </main>
    <!-- // main -->

    <?php include "../include/footer.php";?>
    <!-- //footer -->

    <?php include "../login/login.php" ?>
    <!-- // login popup -->

    <script src="../asset/js/custom.js"></script>
</body>
</html>