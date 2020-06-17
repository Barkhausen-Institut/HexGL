class L4N
{
    constructor(lang)
    {
        this.l4n = lang;
    }

    getString(id,strDefault)
    {
        var s = this.l4n[id];
        if (s)
            return s;
        return strDefault;
    }
}