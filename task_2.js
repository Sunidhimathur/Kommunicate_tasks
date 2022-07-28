var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
var url = new URL(url);
function getUrlParameterValue(url, parameter) {
    var x = url.searchParams.get(parameter);
    return x;
}
console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign"));