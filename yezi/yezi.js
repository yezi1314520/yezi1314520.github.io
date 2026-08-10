
let song_list = [{"name":"好想再爱你",
                                                               "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/hxz.mp3"},
{"name":"【Glitchtale】_我最后的一场游戏_ NITRO Remix",
                                                               "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/pu.mp3"},
{"name":"《别怕我伤心DJ》-【Hi·Res无损音质】",
                                                               "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/zl.mp3"},
{"name":"落泪",
                                                               "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/lldj.mp3"},
{"name":"“再听一万遍心做 可以回到从前吗？”_《心做しdj》",
    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/xzdj.mp3"},
    {"name":"“年少风雅鲜衣怒马 也不过一刹那_”_《红昭愿dj》",
    "url":"http://v4.gh-proxy.org/https://github.com/yezi1314520/muisc/raw/refs/heads/main/hzydj.mp3"}


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


