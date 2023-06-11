// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hey",  
        "Wish You a",
        "Happy",
        "Birthday", 
        "Nivee",
        "இனிய பிறந்த நாள்",
        "வாழ்த்துக்கள்",
        "நிவி",
        " I cant thank you enough for being with me 🤩 & taking care me well",
        "அன்புடன் தீபக் 🐵🐒 " ,
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Turn on",
        play: "Click to play",
        bannar_coming: "Click",
        balloons_flying: "Click here",
        cake_fadein: "Click again",
        light_candle: "Once again",
        wish_message: "Once more",
        story: "Wishes for you",
    }
};
