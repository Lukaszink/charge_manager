const draw = {
    ctx: null,

    wi: 0,
    ht: 0,

    default: {},
    font:{},
    
    init: function(){
        let c = document.getElementById('frame')    
        this.ctx = c.getContext("2d")
        this.wi = c.width
        this.ht = c.height
        
    },

    fillstroke: function(options){
        if(options.fill) this.ctx.fill();
        if(options.stroke)this.ctx.stroke();
    },

    circle: function(x, y, r){
        this.ctx.beginPath();
        this.ctx.arc(this.pctx(x),this.pcty(y), r, 0, Math.PI*2);
        //this.fillstroke(options);
        this.ctx.fill();
    },

    curve: function(x1,y1,x2,y2,x3,y3,stylein){
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "grey";
        if(stylein)this.ctx.strokeStyle = stylein;
        this.ctx.beginPath();
        this.ctx.moveTo(this.pctx(x1), this.pcty(y1));
        this.ctx.quadraticCurveTo(this.pctx(x3),this.pcty(y3),this.pctx(x2),this.pcty(y2));
        this.ctx.stroke();

    },

    line: function(x1, y1, x2, y2, stylein){
        //this.setprop(options);
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "black";
        if(stylein)this.ctx.strokeStyle = stylein;
        this.ctx.beginPath();
        this.ctx.moveTo(this.pctx(x1), this.pcty(y1));
        this.ctx.lineTo(this.pctx(x2), this.pcty(y2));
        this.ctx.stroke();
    },

    text: function(text, x, y, options){
        this.font.name = "sans-serif";
        this.font.size = 10;
        if(options.fill) this.ctx.fillText(text, this.pctx(x), this.pcty(y));
        if(options.stroke) this.ctx.strokeText(text, this.pctx(x), this.pcty(y));
    },


    vp: function(x,y,stylein){
        ob = y+0.4;
        li = x+0.2;
        re = x+2.3;
        un = y+9.6;
        this.line(li,ob,li,un, stylein);
        this.line(li,un,re,un, stylein);
        this.line(re,un,re,ob, stylein);
        this.line(re,ob,li,ob, stylein);

    },

    hp: function(x,y,stylein){
        ob = y+0.4;
        li = x+0.2;
        re = x+4.8;
        un = y+4.6;
        this.line(li,ob,li,un, stylein);
        this.line(li,un,re,un, stylein);
        this.line(re,un,re,ob, stylein);
        this.line(re,ob,li,ob, stylein);

    },


    reset: function(){
        this.ctx.clearRect(0,0, this.wi, this.ht);
        this.ctx.textAlign = this.default.align;
        this.ctx.textBaseline = this.default.baseline;
    },

    pctx: function(c){
        return c*this.wi/100;
    },

    pcty: function(c){
        return c*this.ht/100;
    },
}