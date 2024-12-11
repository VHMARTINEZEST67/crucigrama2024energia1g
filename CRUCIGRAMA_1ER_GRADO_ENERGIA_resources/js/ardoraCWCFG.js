//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#80FF00"; colorText="#000000"; colorSele="#0080C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES, SI LOGRASTE TERMINAR ENTRE LOS 3 PRIMEROS EXIGE TUS PUNTOS EXTRAS"; messageTime=""; messageError="INTÉNTALO DE NUEVO"; messageErrorG="INTÉNTALO DE NUEVO"; messageAttempts="LO SIENTO, MEJOR SUERTE PARA LA PRÓXIMA"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1JVQ0lHUkFNQV8xRVJfR1JBRE9fRU5FUkdJQQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Uw==","SQ==","Uw==","VA==","RQ==","TQ==","QQ==","VA==","RQ==","Qw==","Tg==","SQ==","Qw==","Tw==",""],["","","","","","RQ==","","","","","","","","",""],["","","","","","RA==","","","","","","","","",""],["","","","","","SQ==","","","","","","","","",""],["","","","","Qw==","Tw==","Tg==","VA==","QQ==","TQ==","SQ==","Tg==","QQ==","Tg==",""],["","UA==","","RQ==","","QQ==","","","","","","","","",""],["","QQ==","","Tw==","","TQ==","Tw==","Vg==","SQ==","TQ==","SQ==","RQ==","Tg==","VA==","Tw=="],["","TA==","","TA==","","Qg==","","","","QQ==","","","","",""],["","QQ==","","SQ==","","SQ==","","","","UQ==","","","","",""],["","Tg==","VQ==","Qw==","TA==","RQ==","QQ==","Ug==","","VQ==","","","","",""],["","Qw==","","QQ==","","Tg==","","","","SQ==","","","","",""],["","QQ==","","","","VA==","","","RQ==","Tg==","RQ==","Ug==","Rw==","SQ==","QQ=="],["","Og==","","","","RQ==","","","","QQ==","","","","",""],["","","","","","Og==","","","","Uw==","","","","",""],["","","","","","","Og==","","","","","","","",""]];
var x1=[1,5,6,2,9,6,2,4];
var y1=[1,5,7,10,12,1,6,6];
var x2=[14,14,15,8,15,6,2,4];
var y2=[1,5,7,10,12,13,12,11];
var imaCW=["","","","","","","",""];
var audioCW=["","","","","","","",""];
var defCW=["1.	Cada uno de estos tipos de energía puede estar presente en un","2.	El uso de la energía debe hacerse de manera responsable, debido a que todas","3.	En física para ejecutar un trabajo es necesario que exista","4.	Esta energía permite un bajo costo pero es altamente contaminante y peligroso para la población","5.	se refiere a la capacidad para realizar un trabajo","8.	El gran reto en tal sentido es satisfacer las necesidades y demandas de la comunidad sin dañar el","6.	Se comenzaron a usar intuitivamente la","7.	Para lograr una constante captación sin obstáculos se deforestan grandes zonas"];
var altCW=["","","","","","","",""];
var colNum=15;
var rowNum=15;
