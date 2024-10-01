const myPromise = new Promise(function(resolve, reject) {
    const nama= "vikri";

    if(nama === "Vikri") {
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

myPromise
.then(function() {
    console.log("Nama saya benar");
})
.catch(function() {
    console.log("Nama saya salah");
})
.finally(function() {
    console.log("sistem promise itu telah menjalankan variable nama");
})

