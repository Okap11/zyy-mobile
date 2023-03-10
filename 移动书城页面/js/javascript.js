// 轮播图数据
var swiperImgs = [
    "http://img63.ddimg.cn/2021/6/30/2021063015233889295.jpg",
    "http://img62.ddimg.cn/2021/6/30/2021063015214779018.jpg",
    "http://img63.ddimg.cn/2021/6/30/2021063015222033855.jpg"
];
// 分类栏数据
var list = [
    "http://img63.ddimg.cn/upload_img/00803/1/1zongbang-1581651177.jpg",
    "http://img61.ddimg.cn/upload_img/00803/1/2xinshubang-1581652204.jpg",
    "http://img61.ddimg.cn/upload_img/00796/1/3tongshubang-1581652370.jpg",
    "http://img62.ddimg.cn/upload_img/00796/1/4jiaofubang-1581652439.jpg",
    "http://img61.ddimg.cn/upload_img/00796/1/9dujiategong-1581921679.jpg",
    "http://img60.ddimg.cn/upload_img/00803/1/mingjiazhibo-1581926953.jpg",
    "http://img61.ddimg.cn/upload_img/00803/1/xinshuqiangxiandu-1602655897.png",
    "http://img61.ddimg.cn/upload_img/00766/dangdang/wujie-1606809051.png",
    "http://img60.ddimg.cn/upload_img/00796/1/teseshuguan-1611545631.png",
    "http://img60.ddimg.cn/upload_img/00803/1/10-1592391980.jpg"
];
// 书籍总数据
var books = [{
    id: 1,
    sortName: "小说",
    bookName: "字母表谜案",
    originalPrice: 42.00,
    presentPrice: 32.00,
    author: "大山诚一郎 Oyama Seiichiro",
    content: "当你隐隐觉得不对劲，致命的恶意正悄悄逼近！一座神秘的公寓，不定期举行推理合战。红茶、曲奇，搭配寒意逼人的谜案，与案件相关的字母似乎是重要线索。一群特殊的房客，联手组成侦探团，秘密追踪警视厅也难以锁定的幕后真凶。有被毒妄想的贵妇人，竟应验般惨遭毒杀？午夜零点神秘来电后，美术馆密室惊现死尸。豪华游轮杀人现场，诡异的死亡留言无人能解。绑架案中遇害幼童父亲的手记，字里行间令人细思极恐……越细微的异常，越接近真相，也越令人不寒而栗！",
    thumbSrc: "http://img3m2.ddimg.cn/1/6/29239552-1_w_18.jpg",
    detailSrc: "http://img56.ddimg.cn/99999990298868376.jpg",
    num: 1
},
{
    id: 2,
    sortName: "童书类",
    bookName: "童立方·科学在闪耀",
    originalPrice: 106.00,
    presentPrice: 89.00,
    author: "童立方·科学在闪耀（套装全8册）",
    content: "本系列图书一共八册，涵盖了所有基础的科学主题。轻松明快的插图和漫画直观地传达科学知识，互动提问和动手实践帮助孩子快速理解科学原理。即使对科学毫无兴趣和理解的孩子，也能在阅读和活动中，找到科学学习的乐趣。《力》《声》《电》《光》4册介绍了物理四大学科的基础知识，从声波到光子，从重力到电磁，帮孩子的物理学习打下基础。《地球与太空》《生物》《岩石》《物态》则侧重介绍地球与宇宙的形成以及物质发展等科学知识，为孩子地理、化学和生物的学习打下基础。《力》为什么鲸鱼的肺能自由伸缩？什么时候空气会产生阻力？你能感受到生活中的力吗？翻开这本书，你会感受到空气阻力，也会被金属的磁力吸引，还能感受到来自地球的引力。《声》老鼠如何交流而不被捕食者发现？为什么有人能感受到“鬼魂”？你知道有关声音的知识吗？这本书讲述了你需要知道的关于回声、次声、音符等等有关声的所有内容。一起来听听这个世界的声音！《光》哪种光是肉眼看不见的？鱼怎么用反射光来迷惑饥饿的食肉动物呢？本书讲述了有关色彩、反射和影子等光学知识，阅读本书将使你成为一名聪明的光学专家。《电》又大又重的列车如何悬浮在空中？电和水有什么相似之处？电为什么会发出“嗡嗡”声？聪明的你一定要阅读这本书，来发现我们身体中有电的惊人事实，还会了解到什么是电池、电路和导体。《生物》哪种哺乳动物最聪明？现代恐龙属于什么生物？你将在这本书里看到那些地上爬的、天上飞的、水里游的生物。通过了解它们在栖息地的生活和交友方式，来加深你对生命循环的理解。《地球和太空》哪些行星没有地表？地球只有豌豆粒大小？这本书送给所有对地球和太空好奇的孩子们。翻开这本书，一起由内到外探索太阳系吧，从流星到巨型星系的知识全学会。《物态》为什么热气球能越飞越高？岩石路冰淇淋的科学术语是什么？你知道什么是物态吗？你的生活中接触过蒸发和冷凝吗？翻开这本书，了解什么是液态、固态和气态。《岩石》科学真是太奇妙了！我们刷牙时会用到哪种石头？你能徒手压扁石头吗？如果你对火成岩或变质岩一无所知，那就赶快翻开这本书吧！在这里，你能学会从砂岩中辨认出一块石板，并了解所有关于化石形成的知识。",
    thumbSrc: "http://img3m9.ddimg.cn/38/13/1726664879-1_u_1.jpg",
    detailSrc: "https://img30.360buyimg.com/vc/jfs/t1/146895/36/5511/3124684/5f36572aEc2787482/0bafa1af2664fcc9.jpg",
    num: 1
},
{
    id: 3,
    sortName: "生活",
    bookName: "至味在人间",
    originalPrice: 38.00,
    presentPrice: 19.00,
    author: "陈晓卿",
    content: "大隐于市的美食，散落江湖的佳肴，东奔西走，只为吃口热乎的；一个人的饭馆，每个人的珍珠翡翠白玉汤，南来北往，至味只在人与人之间。《至味在人间》是一个美食爱好者的十年饮啜笔记，陈晓卿将文字化作原料，以散文为碗钵，佐以故事人情之盐，把关于食物的独家记忆蒸炒煎炸而成此书。从千里之外的江湖至味到灵魂深处的家乡味道，从四面八方觅食的扫街嘴到饮食变迁的沧海桑田，从食客厨子店小二谈到饭菜与共那一人，拂袖笑破饭桌上的假面具，平民食物也看得人口水四溅之时，归根结底直抵人心：吃什么、在哪里吃这些问题远不如“和谁吃”来得重要，人间至味往往酝酿于人与人之间，*好吃的永远是人",
    thumbSrc: "http://img3m3.ddimg.cn/54/13/611862723-1_w_5.jpg",
    detailSrc: "https://img10.360buyimg.com/imgzone/jfs/t1/166758/22/924/112166/5ff2df23E0310b4b9/fc26606da081492a.jpg",
    num: 1
},
{
    id: 4,
    sortName: "人文社科类",
    bookName: "蛤蟆先生去看心理医生",
    originalPrice: 38.00,
    presentPrice: 19.00,
    author: "罗伯特·戴博德（Robert de Board）",
    content: "蛤蟆先生一向爱笑爱闹，如今却一反常态地郁郁寡欢。他一个人躲在屋里，连起床梳洗的力气都没有。朋友们非常担心他，建议他去做心理咨询。在10次心理咨询中，蛤蟆在咨询师苍鹭的带领下，勇敢地探索了自己的内心世界，也逐渐找回了信心与希望……为了向大众读者普及心理学知识，告诉大家心理咨询是怎么一回事，作者借用了英国文学经典《柳林风声》的故事主角，让蛤蟆先生和他的朋友们再次登场，演绎了这个关于心理咨询的故事。读者犹如亲临现场，体验心理咨询的每一个细节，见证疗愈和改变的发生。在这本书里，作者借由蛤蟆和心理咨询师苍鹭的互动，探索了蛤蟆自卑、软弱、爱炫耀的个性与抑郁的情绪究竟来源于何处，让读者看到童年经历的深刻影响，以及如何才能在心理上真正长大成人，独立、自信、充满希望地生活。",
    thumbSrc: "http://img3m9.ddimg.cn/71/33/28992419-1_w_18.jpg",
    detailSrc: "http://img52.ddimg.cn/99999990272734062.jpg",
    num: 1
},
{
    id: 5,
    sortName: "漫画",
    bookName: "100天后会死的鳄鱼君",
    originalPrice: 26.50,
    presentPrice: 33.75,
    author: "菊池祐纪（きくちゆうき）",
    content: "强壮、呆萌、可爱、善良的鳄鱼君，一百天后即将死去。作家用四格漫画描绘了鳄鱼君死前一百天的生活；除夕夜的钟声、吃一次拉面、看一场电影、打一次篮球、帮助一只小鸡……朴实的生活场景和“离死还有XX天”的落款 人们重新审视和探究生死真谛——每个生命都有 ，如果我们直视死亡，向死而生的话，会不会选择 好的生活方式呢？行动改变未来。我们每天都在走向生命的终点，如果有想做的事情，是不是早点行动 好呢？是不是可以让原本平淡无奇的 ，变得 有光彩呢……作品 于作家的推特，每天一篇，持续100天，结束于樱花盛开的季节。真实的笔触，全新诠释生死，直抵心灵深处，产生巨大反响，点赞超过1000万，话题热度超过2亿次。",
    thumbSrc: "http://img3m9.ddimg.cn/89/22/642884309-1_w_1.jpg",
    detailSrc: "http://img55.ddimg.cn/1430130713475.jpg",
    num: 1
},
{
    id: 6,
    sortName: "励志",
    bookName: "人性的弱点",
    originalPrice: 20.24,
    presentPrice: 68.00,
    author: "[美]戴尔卡耐基",
    content: "《人性的弱点》是卡耐基成功学奠基之作，荟萃了卡耐基思想理论精华的部分。该书创作于20世纪早期，当时美国经济陷入萧条，战争和贫困导致人们失去了对美好生活的向往。本书作为一本实用的人际关系著作，从人性本质的角度，挖掘出潜藏在人们体内的弱点，使人们能够充分认识自己，并不断改造自己，从而能有所长进，直至取得成功。作者讲述的许多普通人通过奋斗获得成功的真实故事，激励了无数陷入迷茫和困境的人，帮助他们重新找到了自己的人生。本书一经上市就风靡全球，几十年间被翻译成多种语言，深受全球读者推崇，被视为社交心理和沟通技巧的“圣经”。",
    thumbSrc: "http://img3m0.ddimg.cn/25/27/25081180-1_u_4.jpg",
    detailSrc: "http://img52.ddimg.cn/99999990053049412.jpg",
    num: 1
},
{
    id: 7,
    sortName: "经管",
    bookName: "AI经济",
    originalPrice: 109.00,
    presentPrice: 53.20,
    author: "[英]罗杰·布特尔",
    content: "AI真的会改变我们的生活吗？被科技洪流裹挟的每个人，该如何在AI时代做出自己的选择？技术人员认为，一旦制造出达到人类水平的AI，超人类AI的出现几乎是必然发生的事情。与人脑不同的是，数字大脑可无限制地复制，且能够被提速。这就引出了AI革命可能是人类*后一次进步的想法。若指数级的技术进步会带来如此巨大的变化，以至于我们现今所了解的人类事务将走向终结，那么人类历史将会出现奇点。我们认为理所应当存在的体系（经济、政府、法律、国家）将不会以目前的形式存留下来。人类*基本的价值观（生命的神圣性、对幸福的追求、选择的自由）会被替代。",
    thumbSrc: "http://img3m0.ddimg.cn/74/22/638665310-1_u_1.jpg",
    detailSrc: "http://img58.ddimg.cn/99999990277582328.jpg",
    num: 1
},
{
    id: 8,
    sortName: "教育",
    bookName: "微积分的力量",
    originalPrice: 69.00,
    presentPrice: 49.00,
    author: "美国康奈尔大学应用数学系教授、知名教师和数学家",
    content: "微积分是人类历史上的伟大思想成就之一，也是数学领域不可或缺的一个重要分支。除此之外，我们更应该关注的事实是：如果没有微积分，人类就不可能发明电视、微波炉、移动电话、GPS、激光视力矫正手术、孕妇超声检查，也不可能发现冥王星、破解人类基因组、治疗艾滋病，以及弄明白如何把5 000首歌曲装进口袋里。在人类文明进程中的这些具有里程碑意义的发明和发现背后，微积分究竟扮演了什么样的角色？围绕曲线之谜、运动之谜和变化之谜，毕达哥拉斯、阿基米德、伽利略、开普勒、牛顿、莱布尼茨、爱因斯坦、薛定谔等如何用微积分的“钥匙”打开了宇宙奥秘之“锁”？这些谜题的解决方案对人类文明的进程和我们的日常生活又产生了什么样的深远影响？在《微积分的力量》书中，应用数学家兼“导游”斯托加茨将用一种“讲故事”和“看展览”的方式为你一一揭晓答案。“我们不必为了理解微积分的重要性而学习如何做运算，就像我们不必为了享用美食而学习如何做佳肴一样。我将借助图片、隐喻和趣闻逸事等，尝试解释你们需要了解的关于微积分的知识。我也会给你们介绍有史以来颇为精致的一些方程和证明，就像我们在参观画展的时候不会错过其中的代表作一样。”",
    thumbSrc: "http://img3m2.ddimg.cn/20/21/29176112-1_w_14.jpg",
    detailSrc: "http://img51.ddimg.cn/99999990236344741.jpg",
    num: 1
}
];

//设置轮播图效果
var index = 0;
var img = document.getElementById("swiperImgs");
img.src = swiperImgs[index];
function swiper() {
    index++;
    if (index > swiperImgs.length - 1) {
        index = 0;
    }
    img.src = swiperImgs[index];
}
setInterval(swiper, 3000);


// 设置分类栏图片
var item = document.getElementsByClassName("item");
for (var i = 0; i < item.length; i++) {
    item[i].getElementsByTagName("img")[0].src = list[i];
}

// 添加书籍数据
var book = document.getElementsByClassName("book");
var bookName = document.getElementById("bookName");
for (var i = 0; i < book.length; i++) {
    book[i].getElementsByTagName("img")[0].src = books[i].thumbSrc;
    book[i].getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    book[i].getElementsByTagName("p")[0].innerHTML = books[i].content;
    book[i].getElementsByTagName("span")[0].innerHTML = "￥" + books[i].originalPrice;
    book[i].getElementsByTagName("h4")[0].innerHTML = "￥" + books[i].presentPrice;

    // 设置点击事件，跳转到详情页，并通过localStorage存储数据，判断要渲染的数据
    book[i].onclick = function () {
        var flag = this.id;
        localStorage.id = flag;
        location.href = "book-details.html";
    }
}


// 实现添加购物车功能
var div_number = 0;
var add = localStorage.add_shop - 1;
var car_item = document.getElementsByClassName("car-item");
var persons = JSON.parse(localStorage.getItem("persons") || "[]");
if (persons.length == 0 || !persons in localStorage) {
    localStorage.persons = [];
    document.getElementById("empty-car").style.display = "block";
} else {
    for (var i = 0; i < persons.length; i++) {
        car_item[i].style.display = "block";
        car_item[i].getElementsByClassName("info")[0].getElementsByTagName("img")[0].src = persons[i].thumbSrc;
        car_item[i].getElementsByClassName("info")[0].getElementsByTagName("h3")[0].innerHTML = persons[i].bookName;
        car_item[i].getElementsByClassName("info")[0].getElementsByTagName("p")[0].innerHTML = persons[i].content;
        document.getElementsByClassName("left")[i].getElementsByTagName("span")[0].innerHTML = "￥" + persons[i].originalPrice;
        document.getElementsByClassName("left")[i].getElementsByTagName("span")[1].innerHTML = "￥" + persons[i].presentPrice;
        document.getElementsByClassName("left")[i].getElementsByTagName("span")[2].innerHTML = "x " + persons[i].num;
    }
}

// 实现购物车页面功能按钮
var number = 1;
for (var i = 0; i < document.getElementsByClassName("left-btn").length; i++) {
    document.getElementsByClassName("left-btn")[i].getElementsByTagName("button")[1].onclick = function () {
        number += 1;
        var id = this.id;
        var persons = JSON.parse(localStorage.getItem("persons") || "[]");
        persons[id].num = number;
        localStorage.setItem("persons", JSON.stringify(persons));
        document.getElementsByClassName("left")[id].getElementsByTagName("span")[2].innerHTML = "x " + persons[id].num;
    }
    document.getElementsByClassName("left-btn")[i].getElementsByTagName("button")[0].onclick = function () {
        number -= 1;
        var id = this.id;
        if (number < 1) {
            number = 1;
        }
        var persons = JSON.parse(localStorage.getItem("persons") || "[]");
        persons[id].num = number;
        localStorage.setItem("persons", JSON.stringify(persons));
        document.getElementsByClassName("left")[id].getElementsByTagName("span")[2].innerHTML = "x " + persons[id].num;
    }
    document.getElementsByClassName("right-btn")[i].getElementsByTagName("button")[0].onclick = function () {
        var id = this.id;
        var persons = JSON.parse(localStorage.getItem("persons") || "[]");
        persons.splice(id, 1);
        localStorage.setItem("persons", JSON.stringify(persons));
        car_item[id].style.display = "none";
        if (persons.length == 0) {
            document.getElementById("empty-car").style.display = "block";
        }
    }
}

var flag = 1;
var info = document.getElementsByClassName("info");
// 声明选择按钮函数
function is_checked(e, j) {
    var toal = 0;
    var persons = JSON.parse(localStorage.getItem("persons") || "[]");
    if ("check" in persons[j]) {
        flag = persons[j].check;
    }
    flag += 1;
    persons[j].check = flag;
    localStorage.setItem("persons", JSON.stringify(persons));
    for (var i = 0; i < persons.length; i++) {
        if (persons[i].check % 2 == 0) {
            info[i].getElementsByTagName("button")[0].style.backgroundColor = "#1989FA";
            toal = toal + persons[i].originalPrice * persons[i].num;
        } else {
            info[i].getElementsByTagName("button")[0].style.backgroundColor = "white";
        }
    }
    document.getElementById("total-money").innerHTML = "￥" + (toal.toFixed(2));
}

// 实现全选功能
var a = 0;
var sum = 0;
var all_in = document.getElementById("all-in");
all_in.onclick = function () {
    if (a % 2 == 0) {
        all_in.style.backgroundColor = "#1989FA";
        for (var i = 0; i < info.length; i++) {
            info[i].getElementsByTagName("button")[0].style.backgroundColor = "#1989FA";
        }
        for (var i = 0; i < persons.length; i++) {
            sum = sum + persons[i].originalPrice * persons[i].num;
        }
        document.getElementById("total-money").innerHTML = "￥" + (sum.toFixed(2));
    } else {
        all_in.style.backgroundColor = "White";
        for (var i = 0; i < info.length; i++) {
            info[i].getElementsByTagName("button")[0].style.backgroundColor = "white";
        }
        sum = 0;
        document.getElementById("total-money").innerHTML = "￥" + (0.00);
    }
    a++;
}

// 购买按钮
var buy = document.getElementById("buy");
buy.onclick = function () {
    var persons = JSON.parse(localStorage.getItem("persons") || "[]");
    for (var i = 0; i < persons.length; i++) {
        car_item[i].style.display = "none";
    }
    persons = [];
    localStorage.setItem("persons", JSON.stringify(persons));
    document.getElementById("empty-car").style.display = "block";
    alert("购买成功！");
}

// 设置底部导航栏跳转页面事件
var fragment = document.getElementById("fragment");
var fragment_item = fragment.getElementsByTagName("div");
for (var i = 0; i < fragment_item.length; i++) {
    fragment_item[i].onclick = function () {
        var flag = this.id;
        switch (flag) {
            case "icon-book":
                document.getElementById("icon-book").getElementsByTagName("img")[0].src = "img/icon_book_selected.png";
                document.getElementById("icon-book").style.color = "#39A9ED";
                document.getElementById("icon-sort").getElementsByTagName("img")[0].src = "img/icon_sort_noselected.png";
                document.getElementById("icon-sort").style.color = "";
                document.getElementById("icon-car").getElementsByTagName("img")[0].src = "img/icon_car_noselected.png";
                document.getElementById("icon-car").style.color = "";
                document.getElementById("icon-mine").getElementsByTagName("img")[0].src = "img/icon_mine_noselected.png";
                document.getElementById("icon-mine").style.color = "";
                document.getElementById("classification").style.display = "none";
                document.getElementById("mine").style.display = "none";
                document.getElementById("home-page").style.display = "block";
                document.getElementById("shop-car").style.display = "none";
                break;
            case "icon-sort":
                document.getElementById("icon-book").getElementsByTagName("img")[0].src = "img/icon_book_noselected.png";
                document.getElementById("icon-book").style.color = "";
                document.getElementById("icon-sort").getElementsByTagName("img")[0].src = "img/icon_sort_selected.png";
                document.getElementById("icon-sort").style.color = "#39A9ED";
                document.getElementById("icon-car").getElementsByTagName("img")[0].src = "img/icon_car_noselected.png";
                document.getElementById("icon-car").style.color = "";
                document.getElementById("icon-mine").getElementsByTagName("img")[0].src = "img/icon_mine_noselected.png";
                document.getElementById("icon-mine").style.color = "";
                document.getElementById("classification").style.display = "block";
                document.getElementById("mine").style.display = "none";
                document.getElementById("home-page").style.display = "none";
                document.getElementById("shop-car").style.display = "none";
                break;
            case "icon-car":
                document.getElementById("icon-book").getElementsByTagName("img")[0].src = "img/icon_book_noselected.png";
                document.getElementById("icon-book").style.color = "";
                document.getElementById("icon-sort").getElementsByTagName("img")[0].src = "img/icon_sort_noselected.png";
                document.getElementById("icon-sort").style.color = "";
                document.getElementById("icon-car").getElementsByTagName("img")[0].src = "img/icon_car_selected.png";
                document.getElementById("icon-car").style.color = "#39A9ED";
                document.getElementById("icon-mine").getElementsByTagName("img")[0].src = "img/icon_mine_noselected.png";
                document.getElementById("icon-mine").style.color = "";
                document.getElementById("classification").style.display = "none";
                document.getElementById("home-page").style.display = "none";
                document.getElementById("mine").style.display = "none";
                document.getElementById("shop-car").style.display = "block";
                break;
            case "icon-mine":
                document.getElementById("icon-book").getElementsByTagName("img")[0].src = "img/icon_book_noselected.png";
                document.getElementById("icon-book").style.color = "";
                document.getElementById("icon-sort").getElementsByTagName("img")[0].src = "img/icon_sort_noselected.png";
                document.getElementById("icon-sort").style.color = "";
                document.getElementById("icon-car").getElementsByTagName("img")[0].src = "img/icon_car_noselected.png";
                document.getElementById("icon-car").style.color = "";
                document.getElementById("icon-mine").getElementsByTagName("img")[0].src = "img/icon_mine_selected.png";
                document.getElementById("icon-mine").style.color = "#39A9ED";
                document.getElementById("classification").style.display = "none";
                document.getElementById("home-page").style.display = "none";
                document.getElementById("mine").style.display = "block";
                document.getElementById("shop-car").style.display = "none";
                break;
        }
    }
}

// 为分类栏设置不同分类的书籍
for (var i = 0; i < books.length; i++) {
    if (books[i].sortName == "小说") {
        document.getElementById("novel").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("novel").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    } else if (books[i].sortName == "童书类") {
        document.getElementById("children-book").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("children-book").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    } else if (books[i].sortName == "生活") {
        document.getElementById("life").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("life").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    } else if (books[i].sortName == "人文社科类") {
        document.getElementById("humen").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("humen").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    } else if (books[i].sortName == "漫画") {
        document.getElementById("cartoon").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("cartoon").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    } else if (books[i].sortName == "励志") {
        document.getElementById("inspiring").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("inspiring").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    } else if (books[i].sortName == "经管") {
        document.getElementById("manage").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("manage").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    } else if (books[i].sortName == "教育") {
        document.getElementById("education").getElementsByTagName("img")[0].src = books[i].thumbSrc;
        document.getElementById("education").getElementsByTagName("h2")[0].innerHTML = books[i].bookName;
    }
}

// 设置分类栏点击切换事件
var classification_column = document.getElementById("classification-column");
var column_list = classification_column.getElementsByTagName("li");
for (var i = 0; i < column_list.length; i++) {
    column_list[i].onclick = function () {
        var flag = this.innerHTML;
        switch (flag) {
            case "小说":
                column_list[0].style.backgroundColor = "#F7F8FA";
                column_list[1].style.backgroundColor = "";
                column_list[2].style.backgroundColor = "";
                column_list[3].style.backgroundColor = "";
                column_list[4].style.backgroundColor = "";
                column_list[5].style.backgroundColor = "";
                column_list[6].style.backgroundColor = "";
                column_list[7].style.backgroundColor = "";
                document.getElementById("novel").style.display = "block";
                document.getElementById("children-book").style.display = "none";
                document.getElementById("life").style.display = "none";
                document.getElementById("humen").style.display = "none";
                document.getElementById("cartoon").style.display = "none";
                document.getElementById("inspiring").style.display = "none";
                document.getElementById("manage").style.display = "none";
                document.getElementById("education").style.display = "none";
                break;
            case "童书类":
                column_list[0].style.backgroundColor = "";
                column_list[1].style.backgroundColor = "#F7F8FA";
                column_list[2].style.backgroundColor = "";
                column_list[3].style.backgroundColor = "";
                column_list[4].style.backgroundColor = "";
                column_list[5].style.backgroundColor = "";
                column_list[6].style.backgroundColor = "";
                column_list[7].style.backgroundColor = "";
                document.getElementById("novel").style.display = "none";
                document.getElementById("children-book").style.display = "block";
                document.getElementById("life").style.display = "none";
                document.getElementById("humen").style.display = "none";
                document.getElementById("cartoon").style.display = "none";
                document.getElementById("inspiring").style.display = "none";
                document.getElementById("manage").style.display = "none";
                document.getElementById("education").style.display = "none";
                break;
            case "生活":
                column_list[0].style.backgroundColor = "";
                column_list[1].style.backgroundColor = "";
                column_list[2].style.backgroundColor = "#F7F8FA";
                column_list[3].style.backgroundColor = "";
                column_list[4].style.backgroundColor = "";
                column_list[5].style.backgroundColor = "";
                column_list[6].style.backgroundColor = "";
                column_list[7].style.backgroundColor = "";
                document.getElementById("novel").style.display = "none";
                document.getElementById("children-book").style.display = "none";
                document.getElementById("life").style.display = "block";
                document.getElementById("humen").style.display = "none";
                document.getElementById("cartoon").style.display = "none";
                document.getElementById("inspiring").style.display = "none";
                document.getElementById("manage").style.display = "none";
                document.getElementById("education").style.display = "none";
                break;
            case "人文社科":
                column_list[0].style.backgroundColor = "";
                column_list[1].style.backgroundColor = "";
                column_list[2].style.backgroundColor = "";
                column_list[3].style.backgroundColor = "#F7F8FA";
                column_list[4].style.backgroundColor = "";
                column_list[5].style.backgroundColor = "";
                column_list[6].style.backgroundColor = "";
                column_list[7].style.backgroundColor = "";
                document.getElementById("novel").style.display = "none";
                document.getElementById("children-book").style.display = "none";
                document.getElementById("life").style.display = "none";
                document.getElementById("humen").style.display = "block";
                document.getElementById("cartoon").style.display = "none";
                document.getElementById("inspiring").style.display = "none";
                document.getElementById("manage").style.display = "none";
                document.getElementById("education").style.display = "none";
                break;
            case "漫画":
                column_list[0].style.backgroundColor = "";
                column_list[1].style.backgroundColor = "";
                column_list[2].style.backgroundColor = "";
                column_list[3].style.backgroundColor = "";
                column_list[4].style.backgroundColor = "#F7F8FA";
                column_list[5].style.backgroundColor = "";
                column_list[6].style.backgroundColor = "";
                column_list[7].style.backgroundColor = "";
                document.getElementById("novel").style.display = "none";
                document.getElementById("children-book").style.display = "none";
                document.getElementById("life").style.display = "none";
                document.getElementById("humen").style.display = "none";
                document.getElementById("cartoon").style.display = "block";
                document.getElementById("inspiring").style.display = "none";
                document.getElementById("manage").style.display = "none";
                document.getElementById("education").style.display = "none";
                break;
            case "励志":
                column_list[0].style.backgroundColor = "";
                column_list[1].style.backgroundColor = "";
                column_list[2].style.backgroundColor = "";
                column_list[3].style.backgroundColor = "";
                column_list[4].style.backgroundColor = "";
                column_list[5].style.backgroundColor = "#F7F8FA";
                column_list[6].style.backgroundColor = "";
                column_list[7].style.backgroundColor = "";
                document.getElementById("novel").style.display = "none";
                document.getElementById("children-book").style.display = "none";
                document.getElementById("life").style.display = "none";
                document.getElementById("humen").style.display = "none";
                document.getElementById("cartoon").style.display = "none";
                document.getElementById("inspiring").style.display = "block";
                document.getElementById("manage").style.display = "none";
                document.getElementById("education").style.display = "none";
                break;
            case "经管":
                column_list[0].style.backgroundColor = "";
                column_list[1].style.backgroundColor = "";
                column_list[2].style.backgroundColor = "";
                column_list[3].style.backgroundColor = "";
                column_list[4].style.backgroundColor = "";
                column_list[5].style.backgroundColor = "";
                column_list[6].style.backgroundColor = "#F7F8FA";
                column_list[7].style.backgroundColor = "";
                document.getElementById("novel").style.display = "none";
                document.getElementById("children-book").style.display = "none";
                document.getElementById("life").style.display = "none";
                document.getElementById("humen").style.display = "none";
                document.getElementById("cartoon").style.display = "none";
                document.getElementById("inspiring").style.display = "none";
                document.getElementById("manage").style.display = "block";
                document.getElementById("education").style.display = "none";
                break;
            case "教育":
                column_list[0].style.backgroundColor = "";
                column_list[1].style.backgroundColor = "";
                column_list[2].style.backgroundColor = "";
                column_list[3].style.backgroundColor = "";
                column_list[4].style.backgroundColor = "";
                column_list[5].style.backgroundColor = "";
                column_list[6].style.backgroundColor = "";
                column_list[7].style.backgroundColor = "#F7F8FA";
                document.getElementById("novel").style.display = "none";
                document.getElementById("children-book").style.display = "none";
                document.getElementById("life").style.display = "none";
                document.getElementById("humen").style.display = "none";
                document.getElementById("cartoon").style.display = "none";
                document.getElementById("inspiring").style.display = "none";
                document.getElementById("manage").style.display = "none";
                document.getElementById("education").style.display = "block";
                break;
        }
    }
}