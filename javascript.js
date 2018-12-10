plyr.setup(".plyr-audio1");
plyr.setup(".plyr-audio2");
var xml1 = "<tracklist>\n" +
    "    <type>song</type>\n" +
    "    <track>\n" +
    "    <title>\n" +
    "        <![CDATA[Anh Đếch Cần Gì Nhiều Ngoài Em]]>\n" +
    "    </title>\n" +
    "    <time>\n" +
    "        <![CDATA[0:00]]>\n" +
    "    </time>\n" +
    "    <creator>\n" +
    "        <![CDATA[Đen, Vũ, Thành Đồng]]>\n" +
    "    </creator>\n" +
    "    <location>\n" +
    "        <![CDATA[https://aredir.nixcdn.com/NhacCuaTui971/AnhDechCanGiNhieuNgoaiEm-DenVuThanhDong-5749937.mp3?st=mjdcfdqPsqz9OZ6c8q0rAQ&e=1544436342]]>\n" +
    "    </location>\n" +
    "    <locationHQ>\n" +
    "        <![CDATA[]]>\n" +
    "    </locationHQ>\n" +
    "    <hasHQ>\n" +
    "        <![CDATA[true]]>\n" +
    "    </hasHQ>\n" +
    "    <info>\n" +
    "        <![CDATA[https://www.nhaccuatui.com/bai-hat/anh-dech-can-gi-nhieu-ngoai-em-den-ft-vu-ft-thanh-dong.VSvhW9JOP9gD.html]]>\n" +
    "    </info>\n" +
    "    <lyric><![CDATA[https://lrc-nct.nixcdn.com/2018/11/20/9/f/8/c/1542687331838.lrc]]></lyric>\n" +
    "    <bgimage><![CDATA[https://avatar-nct.nixcdn.com/singer/avatar/2018/11/19/0/5/d/6/1542621900657_600.jpg]]></bgimage>\n" +
    "    <avatar><![CDATA[https://avatar-nct.nixcdn.com/song/2018/11/17/7/e/d/6/1542467262054.jpg]]></avatar>\n" +
    "    <coverimage><![CDATA[https://avatar-nct.nixcdn.com/song/2018/11/17/7/e/d/6/1542467262054_500.jpg]]></coverimage>\n" +
    "    <newtab><![CDATA[https://www.nhaccuatui.com/nghe-si-den-vau.html]]></newtab>\n" +
    "    <kbit><![CDATA[320]]></kbit>\n" +
    "    <key><![CDATA[VSvhW9JOP9gD]]></key>\n" +
    "    </track>    \n" +
    "</tracklist>\n",
    xmlDoc = $.parseXML(xml1),
    $xml = $(xmlDoc);
$title = $xml.find("title");
$creator = $xml.find("creator");
$(".title-1").append($title.text());
$(".creator-1").append($creator.text());
function audioPlayer(){
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });

    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#playlist li a").length)
            currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}