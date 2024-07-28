function GetColorFromHex(hexCode)
{
    var color = new Object();
    color.r = Number("0x" + hexCode.substring(1, 3));
    color.g = Number("0x" + hexCode.substring(3, 5));
    color.b = Number("0x" + hexCode.substring(5, 7));
    
    return color;
}

function GetHexFromColor(color){
    return "#"
        + getHexLength2(color.r)
        + getHexLength2(color.g)
        + getHexLength2(color.b);
}

function getHexLength2(value){
    var hex = Math.round(value).toString(16);
    if(hex.length == 1) 
        hex = "0" + hex;

    return hex;
}

function GetHSLFromColor(color)
{
    var RNormalized = color.r / 255;
    var GNormalized = color.g / 255;
    var BNormalized = color.b / 255;

    var max = Math.max(RNormalized, Math.max(GNormalized, BNormalized));
    var min = Math.min(RNormalized, Math.min(GNormalized, BNormalized));
    var diff = max - min;

    var h = 0.0;
    if (max == RNormalized) h = ((GNormalized - BNormalized) / diff) % 6;
    else if (max == GNormalized) h = ((BNormalized - RNormalized) / diff) + 2;
    else if (max == BNormalized) h = ((RNormalized - GNormalized) / diff) + 4;

    if (h < 0) h += 6;
    else if (h > 6) h -= 6;
    else if (isNaN(h)) h = 0;

    var hue = h * 60;

    var luminance = (max + min) / 2;

    var saturation = 0.0;
    if ((1.0 - Math.abs((2.0 * luminance) - 1.0)) != 0)
        saturation = diff / (1.0 - Math.abs((2.0 * luminance) - 1.0));

    var hsl = new Object();
    hsl.hue = hue;
    hsl.saturation = saturation;
    hsl.luminance = luminance;
    return hsl;
}

function GetColorFromHSL(hsl){
    var hue = hsl.hue;
    var saturation = hsl.saturation;
    var luminance = hsl.luminance;

    var c = (1.0 - Math.abs((2.0 * luminance) - 1.0)) * saturation;

    var h = hue / 60;
    var x = c * (1.0 - Math.abs((h % 2.0) - 1.0));

    var r = 0.0, g = 0.0, b = 0.0;

    if (h >= 0.0 && h < 1.0)
    {
        r = c;
        g = x;
        b = 0.0;
    }
    else if (h >= 1.0 && h < 2.0)
    {
        r = x;
        g = c;
        b = 0.0;
    }
    else if (h >= 2.0 && h < 3.0)
    {
        r = 0.0;
        g = c;
        b = x;
    }
    else if (h >= 3.0 && h < 4.0)
    {
        r = 0.0;
        g = x;
        b = c;
    }
    else if (h >= 4.0 && h < 5.0)
    {
        r = x;
        g = 0.0;
        b = c;
    }
    else if (h >= 5.0 && h < 6.0)
    {
        r = c;
        g = 0.0;
        b = x;
    }

    var m = luminance - (c / 2.0);
    if (m < 0)
    {
        m = 0;
    }

    var color = new Object();
    color.r = (r + m) * 255;
    color.g = (g + m) * 255;
    color.b = (b + m) * 255;
    return color;
}

function GetContrastingColor(hex){
    var color = GetColorFromHex(hex);
    var hsl = GetHSLFromColor(color);

    if(hsl.luminance > 0.5){
        hsl.luminance = Math.max(0, hsl.luminance -= 0.1);
    }
    else{
        hsl.luminance = Math.min(1, hsl.luminance += 0.07);
    }

    color = GetColorFromHSL(hsl);
    return GetHexFromColor(color);
}