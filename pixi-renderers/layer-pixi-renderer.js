var gdjs;(function(s){const r=GlobalPIXIModule.PIXI;class d{constructor(e,i){this._renderTexture=null;this._lightingSprite=null;this._oldWidth=null;this._oldHeight=null;this._pixiContainer=new r.Container,this._layer=e,this._runtimeSceneRenderer=i,this._pixiRenderer=i.getPIXIRenderer(),this._isLightingLayer=e.isLightingLayer(),this._clearColor=e.getClearColor(),i.getPIXIContainer().addChild(this._pixiContainer),this._pixiContainer.filters=[],this._isLightingLayer&&this._replaceContainerWithSprite()}getRendererObject(){return this._pixiContainer}getLightingSprite(){return this._lightingSprite}updatePosition(){const e=-s.toRad(this._layer.getCameraRotation()),i=this._layer.getCameraZoom();this._pixiContainer.rotation=e,this._pixiContainer.scale.x=i,this._pixiContainer.scale.y=i;const t=Math.cos(e),n=Math.sin(e),h=this._layer.getCameraX()*i*t-this._layer.getCameraY()*i*n,o=this._layer.getCameraX()*i*n+this._layer.getCameraY()*i*t;this._pixiContainer.position.x=this._layer.getWidth()/2-h,this._pixiContainer.position.y=this._layer.getHeight()/2-o,this._layer.getRuntimeScene().getGame().getPixelsRounding()&&(t===0||n===0)&&Number.isInteger(i)&&(this._pixiContainer.position.x=Math.ceil(this._pixiContainer.position.x),this._pixiContainer.position.y=Math.ceil(this._pixiContainer.position.y))}updateVisibility(e){this._pixiContainer.visible=!!e}updatePreRender(){this._renderTexture&&this._updateRenderTexture()}addRendererObject(e,i){e.zOrder=i;for(let t=0,n=this._pixiContainer.children.length;t<n;++t)if(this._pixiContainer.children[t].zOrder>=i){this._pixiContainer.addChildAt(e,t);return}this._pixiContainer.addChild(e)}changeRendererObjectZOrder(e,i){this._pixiContainer.removeChild(e),this.addRendererObject(e,i)}removeRendererObject(e){this._pixiContainer.removeChild(e)}updateClearColor(){this._clearColor=this._layer.getClearColor(),this._updateRenderTexture()}_updateRenderTexture(){if(!this._pixiRenderer||this._pixiRenderer.type!==r.RENDERER_TYPE.WEBGL)return;if(!this._renderTexture){this._oldWidth=this._pixiRenderer.screen.width,this._oldHeight=this._pixiRenderer.screen.height;const t=this._oldWidth,n=this._oldHeight,h=this._pixiRenderer.resolution;this._renderTexture=r.RenderTexture.create({width:t,height:n,resolution:h}),this._renderTexture.baseTexture.scaleMode=r.SCALE_MODES.LINEAR}(this._oldWidth!==this._pixiRenderer.screen.width||this._oldHeight!==this._pixiRenderer.screen.height)&&(this._renderTexture.resize(this._pixiRenderer.screen.width,this._pixiRenderer.screen.height),this._oldWidth=this._pixiRenderer.screen.width,this._oldHeight=this._pixiRenderer.screen.height);const e=this._pixiRenderer.renderTexture.current,i=this._pixiRenderer.renderTexture.sourceFrame;this._pixiRenderer.renderTexture.bind(this._renderTexture),this._pixiRenderer.renderTexture.clear(this._clearColor),this._pixiRenderer.render(this._pixiContainer,this._renderTexture,!1),this._pixiRenderer.renderTexture.bind(e,i,void 0)}_replaceContainerWithSprite(){if(!this._pixiRenderer||this._pixiRenderer.type!==r.RENDERER_TYPE.WEBGL||(this._updateRenderTexture(),!this._renderTexture))return;this._lightingSprite=new r.Sprite(this._renderTexture),this._lightingSprite.blendMode=r.BLEND_MODES.MULTIPLY;const e=this._runtimeSceneRenderer.getPIXIContainer(),i=e.getChildIndex(this._pixiContainer);e.addChildAt(this._lightingSprite,i),e.removeChild(this._pixiContainer)}}s.LayerPixiRenderer=d,s.LayerRenderer=s.LayerPixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=layer-pixi-renderer.js.map
