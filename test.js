const storage = localStorage;

const task = document.getElementById("task");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const allLoadBtn = document.getElementById("allLoadBtn");
const allDelBtn = document.getElementById("allDelBtn");

const result = document.getElementById("result");

/**
 * 保存
 */
saveBtn.addEventListener("click", () =>{
    storage.store = task;
    // storage.setItem("store", task.value);
    storage.setItem(task.value, task.value);

    alert("保存しました");

});

/**
 * 
 */
allLoadBtn.addEventListener("click", () =>{
    
    let resultData = [];
    let storageLen = localStorage.length;

    for(let i = 0; i < storageLen; i++){
        let key = localStorage.key(i);
        resultData.push(localStorage.getItem(key));
    }

    result.innerText = resultData.join(",");
});

/**
 * 全件削除
 */
allDelBtn.addEventListener("click", () =>{
    if(!window.confirm("登録データを全件削除してよろしいですか？")){
        alert("取り消しました");
        return;
    }

    storage.clear();
    alert("全件削除しました");
});
