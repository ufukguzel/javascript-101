var dizi = [
    {meyve: "elma", mevsim: "yaz"},
    {meyve: "armut", mevsim: "yaz"},
    {meyve: "mandalina", mevsim: "kış"},
    {meyve: "portakal", mevsim: "kış"},
    {meyve: "çilek", mevsim: "yaz"},
    {meyve: "erik", mevsim: "yaz"},
    {meyve: "üzüm", mevsim: "kış"}
];

var yazmeyveleri = dizi.filter(function(elmn)
{
    if (elmn.mevsim == "yaz") {
        return true;
        
    }
});

