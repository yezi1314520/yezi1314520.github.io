
let song_list = [{"name":"海屿你 8d ",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/hyn.mp3"},
        {"name":"无人之岛",
         "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/wrzd.mp3"},
        {"name":"九万字",
        "url":"https://v4.gh-proxy.org/https://raw.githubusercontent.com/yezi1314520/muisc/refs/heads/main/9.mp3"},
        {"name":"雨爱 8d ",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/ya.mp3"},
        {"name":"Call of Silence",
        "url":"https://v4.gh-proxy.org/https://raw.githubusercontent.com/yezi1314520/muisc/refs/heads/main/callofsilence.mp3"},
        {"name":"背起了行囊",
        "url":"https://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/nkddw.mp3"},
        {"name":"Fever Pitch",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/fever.mp3"},
        {"name":"letting go 8d环绕版",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/lg.mp3"},
        {"name":"angel 8d环绕",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/angel.mp3"},
        {"name":"罗生门 8d环绕",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/lsm.mp3"},
        {"name":"恋人 8d环绕",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/lr.mp3"},
        {"name":"雨过后的风景 8d环绕",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/yghdfj.mp3"},
        {"name":"演员 8d环绕",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/yy.mp3"},
        {"name":"烟花易冷 8d ",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/yhyl.mp3"},
        {"name":"爱错 8d",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/ac.mp3"},
        {"name":"小半 8d ",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/xb.mp3"},
        {"name":"坠落 8d",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/zl.mp3"},
        {"name":"cry for me",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/cry.mp3"},
        {"name":"心似烟火",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/xsyh.mp3"},
        {"name":"Hi-Res无损梦的翅膀受了伤",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/mdcbslh.mp3"},
        {"name":"别怕我伤心",
        "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/bpwsx.mp3"},
        {"name":"落泪",
         "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/ll.mp3"}


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


