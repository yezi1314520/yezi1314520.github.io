
let song_list = [{"name":"好想再爱你(追猎)",
                                                                                     "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/hxz.mp3"},
                                                                                    {"name":"【Glitchtale】_我最后的一场游戏_ NITRO Remix",
                                                                                     "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/pu.mp3"},
                                                                                    {"name":"《别怕我伤心DJ追猎》-【Hi·Res无损音质】",
                                                                                     "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/zldj.mp3"},
                                                                                    {"name":"落泪",
                                                                                     "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/lldj.mp3"},
                                                                                    {"name":"“再听一万遍心做 可以回到从前吗？”_《心做しdj》",
                                                                                     "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/xzdj.mp3"},
                                                                                    {"name":"“年少风雅鲜衣怒马 也不过一刹那_”_《红昭愿dj》",
                                                                                    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/hzydj.mp3"},
                                                                                    {"name":"《Boyboyboybee》-【Hi·Res无损】",
                                                                                     "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/boy.mp3"},
                                                                                     {"name":"DJ阿智《只对你有感觉dj》",
                                                                                     "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/zd.mp3"},
                                                                                    {"name":"离开我的依赖",
                                                                                    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/lkwd5.mp3"},
    {"name":"过火",
    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/1314520.mp3"},
     {"name":"精卫",
    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/json.mp3"},
 {"name":"牵丝戏",
"url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/无敌加密看你马呢.mp3"},
     {"name":"游京",
"url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/屿哥哥爱你.mp3"},
     {"name":"天亮以前说再见",
"url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/tlyq.mp3"},
     {"name":"大杂烩",
"url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/52099.mp3"},
    {"name":"十年人间",
    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/snrjdj.mp3"},
    {"name":"好喜欢你",
    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/haolike.mp3"},
    {"name":"我知道你不爱我",
    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/wzdnbaw.mp3"}

    ];

    const audioPlayer = document.getElementById("audioPlayer");
    const currentSongName = document.getElementById("currentSongName");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const songListBox = document.getElementById("songListBox");
    const mainBox = document.getElementById("mainBox");
    const selectFileBtn = document.getElementById("selectFileBtn");
    const fileInput = document.getElementById("fileInput");
    const welcomePop = document.getElementById("welcomePop");
    const closePopBtn = document.getElementById("closePopBtn");

    let currentIndex = 0;
    window.addEventListener("load",()=>{
        welcomePop.style.display = "flex";
    })
    closePopBtn.addEventListener("click",()=>{
        welcomePop.style.display = "none";
    })
    function renderList(){
        songListBox.innerHTML = "";
        song_list.forEach((song, idx)=>{
            const div = document.createElement("div");
            div.className = "song-item";
            div.innerText = "♡ " + song.name;
            div.onclick = ()=> loadSong(idx);
            songListBox.appendChild(div);
        })
    }


    function loadSong(index){
        if(song_list.length === 0) return;
        currentIndex = index;
        const song = song_list[currentIndex];
        audioPlayer.src = song.url;
        audioPlayer.load();
        currentSongName.innerText = song.name;
        updateActive();
    }

    function updateActive(){
        const items = document.querySelectorAll(".song-item");
        items.forEach(item=> item.classList.remove("active"));
        if(items[currentIndex]) items[currentIndex].classList.add("active");
    }


    renderList();
    audioPlayer.volume = 1;


    prevBtn.addEventListener("click", ()=>{
        let newIdx = currentIndex - 1;
        if(newIdx < 0) newIdx = song_list.length -1;
        loadSong(newIdx);
    })


    nextBtn.addEventListener("click", ()=>{
        let newIdx = currentIndex + 1;
        if(newIdx >= song_list.length) newIdx = 0;
        loadSong(newIdx);
    })


    audioPlayer.addEventListener("ended",()=>{
        let newIdx = currentIndex +1;
        if(newIdx >= song_list.length) newIdx = 0;
        loadSong(newIdx);
    })


    selectFileBtn.addEventListener("click", ()=>{
        fileInput.click();
    })
    fileInput.addEventListener("change", (e)=>{
        const files = e.target.files;
        addAudioFiles(files);
        fileInput.value = "";
    })


    ['dragenter','dragover','dragleave','drop'].forEach(eventName=>{
        mainBox.addEventListener(eventName, e=>e.preventDefault());
    })
    mainBox.addEventListener("dragenter",()=>mainBox.classList.add("drag-over"));
    mainBox.addEventListener("dragover",()=>mainBox.classList.add("drag-over"));
    mainBox.addEventListener("dragleave",()=>mainBox.classList.remove("drag-over"));
    mainBox.addEventListener("drop",(e)=>{
        mainBox.classList.remove("drag-over");
        const files = e.dataTransfer.files;
        addAudioFiles(files);
    })


    function addAudioFiles(files){
        for(let file of files){
            const url = URL.createObjectURL(file);
            song_list.push({
                name: file.name,
                url: url
            });
        }
        renderList();
    }


