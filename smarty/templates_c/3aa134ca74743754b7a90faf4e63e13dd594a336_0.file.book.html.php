<?php
/* Smarty version 3.1.32, created on 2019-04-20 08:03:24
  from 'G:\mobile\EC\smarty\templates\book.html' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5cbad24cad3e97_35675647',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3aa134ca74743754b7a90faf4e63e13dd594a336' => 
    array (
      0 => 'G:\\mobile\\EC\\smarty\\templates\\book.html',
      1 => 1555747402,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5cbad24cad3e97_35675647 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/reset.css">
    <link rel="stylesheet" href="../../css/book.css">
    <link rel="stylesheet" href="../../css/iscroll.css">
</head>

<body>
    <div class="wrap">
        <header>
            <div class="headerText">小萌书</div>
            <div class="left-back"></div>
            <div class="right-more"></div>
        </header>
        <div class="opgc_header">
            <div class="fixed_header">
                <div class="header_min">
                    <div class="header_min_top">
                        <div class="pets_type fl">
                            <img class="pet_position" src="../../images/liuimgs/dingwei.png">
                            <span class="ft14">狗狗</span>
                            <img class="pet_position_item" src="../../images/liuimgs/dingwei1.png" />
                        </div>
                        <div class="search_max fl">
                            <a class="search">
                                <img class="search_img" src="../../images/liuimgs/search.png">
                                <span class="search_content">请输入搜索内容</span>
                            </a>
                        </div>
                        <a class="news fr">
                            <img class="news_img" src="../../images/liuimgs/xiaolian.png" />
                        </a>
                    </div>
                    <ul class="header_min_nav">
                        <li class="header_min_nav_item">收藏</li>
                        <li class="header_min_nav_item">推荐</li>
                        <li class="header_min_nav_item">达人测评</li>
                        <li class="header_min_nav_item">养宠视频</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main_list">
            <div class="main_list_nav">
                <div class="main_list_nav_item">
                    <a>
                        <img src="../../images/liuimgs/eat.png">
                    </a>
                </div>
                <div class="main_list_nav_item">
                    <a>
                        <img src="../../images/liuimgs/diseasePet.png">
                    </a>
                </div>
                <div class="main_list_nav_item">
                    <a>
                        <img src="../../images/liuimgs/moreTool.png">
                    </a>
                </div>
                <div class="main_list_nav_item">
                    <a>
                        <img src="../../images/liuimgs/protectPet.png">
                    </a>
                </div>
                <div class="main_list_nav_item">
                    <a>
                        <img src="../../images/liuimgs/knowledgeBase.png">
                    </a>
                </div>
            </div>
            <div class="main_list_comments">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['arr']->value, 'value');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['value']->value) {
?>
                <div class="main_list_comments_item">
                    <div class="list_video clearfix">
                        <div class="list_video_top fl">
                            <a>
                                <div class="img_video fl">
                                    <img src='<?php echo $_smarty_tpl->tpl_vars['value']->value["src"];?>
'>
                                </div>
                                <div class="title fl">
                                    <h3 class="twoLine"><?php echo $_smarty_tpl->tpl_vars['value']->value["title"];?>
</h3>
                                    <p><?php echo $_smarty_tpl->tpl_vars['value']->value["description"];?>
</p>
                                </div>
                            </a>
                        </div>
                        <div class="list_video_top_bottom clearfix">
                            <div class="autor fl">
                                <a>
                                    <img class="autor_img" src='<?php echo $_smarty_tpl->tpl_vars['value']->value["head"];?>
'>
                                    <span class="autor_text"><?php echo $_smarty_tpl->tpl_vars['value']->value["autor"];?>
</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);?>
            </div>
        </div>
    </div>
    <?php echo '<script'; ?>
 src="../../js/book.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="../../js/iscroll-probe.js"><?php echo '</script'; ?>
>
</body>

</html><?php }
}
