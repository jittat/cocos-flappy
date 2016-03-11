var Ship = cc.Sprite.extend({
  ctor: function() {
    this._super();
    this.initWithFile( 'res/images/ship.png' );
  },

  update: function( dt ) {
    var pos = this.getPosition();
    pos.y += 1;
    this.setPosition( new cc.Point( pos.x, pos.y ) );
  }
});
