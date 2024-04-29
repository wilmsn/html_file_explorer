/*****************************************************************************************************
* "filedir.js" erzeugt auf einer Webseite einen einfachen Dateibaum. 
* Es ist nur mit JQuery nutzbar.
* Derzeit werden alle Dateien nur als MP3 Dateien angezeigt.
*
* Schnittstellen:
* Eingang (Befüllung) innerhalb der "$(document).ready(function(){"
*
*  fd_add("Filename mit komplettem Pfad inkl. führendem /");
* 
* Ausgang:
* Innerhalb des Hauptprogrammes sind folgende Funktionen zu implementieren: 
*   function fd_play_dir(dirname) {
*      <Alles was damit gemacht werden soll>
*   }
*
*   function fd_play_file(filename) {
*      <Alles was damit gemacht werden soll>
*   }
*
******************************************************************************************************/

var fd_do = "dir_open.png";
var fd_dc = "dir_close.png";
var fd_pl = "play.png";
var fd_fi = "mp3file.png";
var fd_le = "leer.png";
const fd_dirs = [];
var fd_cnt = 0;
var fd_dims = "height='60px' width='60px'";
var fd_base = "html_file_explorer";


function fd_add_file(dir, file, dircnt, filecnt) {
    $("#fd_dir"+dircnt).append("<img id='fd_playdir"+dircnt+"f"+filecnt+"' src='"+fd_pl+"' "+fd_dims+">");
    $("#fd_dir"+dircnt).append("<img src='"+fd_le+"' "+fd_dims+">");
    $("#fd_dir"+dircnt).append("<img src='"+fd_fi+"' "+fd_dims+"><div class='fd_file'>"+file+"</div>");
    $("#fd_playdir"+dircnt+"f"+filecnt).click(function() {
        fd_play_file(dir+file);
    });
}

function fd_add(myfile) {
    var dir;
    var file;
    var pos;
    pos = 0;
    while ( myfile.indexOf("/",pos+1) > 0 ) {
        pos = myfile.indexOf("/",pos+1);
    }
    dir = myfile.slice(0,pos+1);
    file = myfile.slice(pos+1);
    if ( fd_dirs.includes(dir) ) {
        let dircnt = $("#fd_dircnt"+fd_cnt).html();
        let filecnt = $("#fd_filecnt"+fd_cnt).html();
        filecnt++;
        $("#fd_filecnt"+fd_cnt).html(filecnt);
        fd_add_file(dir, file, dircnt, filecnt);
    } else {
        fd_dirs.push(dir);
        // fd_cnt wird in einem div gespeichert sonst funktioniert es nicht!!
        // Danach wird dann die wiederausgelesene Var. dircnt verwendet
        fd_cnt++;
        $("#"+fd_base).append("<div id='fd_dircnt"+fd_cnt+"'></div>");
        $("#fd_dircnt"+fd_cnt).html(fd_cnt);
        $("#fd_dircnt"+fd_cnt).hide();
        // Initialisierung für den Dateizähler filecnt, Nutzung im anderen Teil der IF Anweisung
        $("#"+fd_base).append("<div id='fd_filecnt"+fd_cnt+"'></div>");
        $("#fd_filecnt"+fd_cnt).html(1);
        $("#fd_filecnt"+fd_cnt).hide();
        let dircnt = $("#fd_dircnt"+fd_cnt).html();
        // Ab hier keine Verwendung von fd_cnt mehr !!!
        $("#"+fd_base).append("<img id='fd_playdir"+dircnt+"' src='"+fd_pl+"' "+fd_dims+">");
        $("#"+fd_base).append("<img id='fd_dirimg"+dircnt+"' src='"+fd_dc+"' "+fd_dims+">"+"<div class='fd_dir'>"+dir.slice(1,dir.length-1)+"</div>");
        $("#"+fd_base).append("<div id='fd_dir"+dircnt+"'></div>");
        $("#fd_dir"+dircnt).hide();
        fd_add_file(dir, file, dircnt, 1);
        $("#fd_dirimg"+dircnt).click(function() {
            if ( $("#fd_dir"+dircnt).is(':hidden') ) {
                $("#fd_dirimg"+dircnt).attr("src",fd_do);
                $("#fd_dir"+dircnt).show();
                $("#fd_playdir"+dircnt).attr("src",fd_le);
            } else {
                $("#fd_dirimg"+dircnt).attr("src",fd_dc);
                $("#fd_dir"+dircnt).hide();
                $("#fd_playdir"+dircnt).attr("src",fd_pl);
            }
        });
        $("#fd_playdir"+dircnt).click(function() {
            fd_play_dir(dir);
        });
    }
}

