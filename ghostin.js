function spookycrypt(){
    const password = document.getElementById("password-field").value;
    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX18QhSSMHm2Ee4mpBSE//G3jjVGvAts/iSblcml9Tuz7KCl4VSeUXL1EpuIQUqE8XHZXXD6QCqCfYE5SKxTZS+IKChpMy1MowFy/zaAIo8sZ1tUcC5g0u/xCNt4BXCjKKolNYcSyrZdulA==",password).toString(CryptoJS.enc.Utf8);
    alert(String(decrypted));
    return false;

}
