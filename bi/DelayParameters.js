class DelayParameters
{
    
    constructor()
    {
        this.index = 0;
        this.value = 0;
        this.numParameters = Object.keys(DELAY_PARAMS).length;
    }

    inc()
    {
        if (this.index < this.numParameters - 1)
        {
            this.index++;
            this.value = Object.values(DELAY_PARAMS)[this.index];
        }
        
    }

    get()
    {
        var o = new Object();
        o.value = this.value;
        o.key = Object.keys(DELAY_PARAMS)[this.index];
        return o;
    }

    dec()
    {
        if (this.index > 0)
        {
            this.index--;
            this.value = Object.values(DELAY_PARAMS)[this.index];
        }
    }
};