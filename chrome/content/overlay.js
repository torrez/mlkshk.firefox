mlkshk = {

    mlkshkurl: "http://mlkshk.com/tools/p?url=",

    init: function() {
        window.removeEventListener("load", mlkshk.init, false);
        document.getElementById("contentAreaContextMenu").addEventListener("popupshowing", mlkshk.Context, false);
    },

    Context : function() {
        var menuitem1 = document.getElementById("mlkshk-imagen");
        menuitem1.hidden = !gContextMenu.onImage;
    },
    subir : function() {
        var strImgURL = gContextMenu.imageURL;
        //myTabRef = getBrowser().addTab();
        //getBrowser().selectedTab = myTabRef;
        //var tabBr = getBrowser().getBrowserForTab(myTabRef);
        //var doc = tabBr.contentDocument;
        //doc.location.href = mlkshk.mlkshkurl + strImgURL;
        
        window.open(mlkshk.mlkshkurl + strImgURL, "Save an image.", "toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes");
    },
};

window.addEventListener("load", mlkshk.init, false);
