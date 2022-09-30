gdjs.ArenaCode = {};
gdjs.ArenaCode.GDHeartObjects1= [];
gdjs.ArenaCode.GDHeartObjects2= [];
gdjs.ArenaCode.GDHeartObjects3= [];
gdjs.ArenaCode.GDPlayerObjects1= [];
gdjs.ArenaCode.GDPlayerObjects2= [];
gdjs.ArenaCode.GDPlayerObjects3= [];
gdjs.ArenaCode.GDFrameObjects1= [];
gdjs.ArenaCode.GDFrameObjects2= [];
gdjs.ArenaCode.GDFrameObjects3= [];
gdjs.ArenaCode.GDFrameTextObjects1= [];
gdjs.ArenaCode.GDFrameTextObjects2= [];
gdjs.ArenaCode.GDFrameTextObjects3= [];
gdjs.ArenaCode.GDCurrentSpeedObjects1= [];
gdjs.ArenaCode.GDCurrentSpeedObjects2= [];
gdjs.ArenaCode.GDCurrentSpeedObjects3= [];
gdjs.ArenaCode.GDSpeedValueObjects1= [];
gdjs.ArenaCode.GDSpeedValueObjects2= [];
gdjs.ArenaCode.GDSpeedValueObjects3= [];

gdjs.ArenaCode.conditionTrue_0 = {val:false};
gdjs.ArenaCode.condition0IsTrue_0 = {val:false};
gdjs.ArenaCode.condition1IsTrue_0 = {val:false};


gdjs.ArenaCode.eventsList0 = function(runtimeScene) {

{


gdjs.ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDPlayerObjects2[i].returnVariable(gdjs.ArenaCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDPlayerObjects2[i].addPolarForce(270, (gdjs.RuntimeObject.getVariableNumber(gdjs.ArenaCode.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDPlayerObjects2[i].addPolarForce(180, (gdjs.RuntimeObject.getVariableNumber(gdjs.ArenaCode.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDPlayerObjects2[i].addPolarForce(90, (gdjs.RuntimeObject.getVariableNumber(gdjs.ArenaCode.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDPlayerObjects2[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.ArenaCode.GDPlayerObjects2[i].getVariables().getFromIndex(0))), 0);
}
}}

}


{


gdjs.ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if (gdjs.ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.ArenaCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDPlayerObjects2[i].returnVariable(gdjs.ArenaCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.ArenaCode.condition0IsTrue_0.val = false;
{
gdjs.ArenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
}if (gdjs.ArenaCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.ArenaCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.ArenaCode.GDPlayerObjects1[i].returnVariable(gdjs.ArenaCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.ArenaCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.ArenaCode.GDFrameObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.ArenaCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpeedValue"), gdjs.ArenaCode.GDSpeedValueObjects2);
{for(var i = 0, len = gdjs.ArenaCode.GDFrameObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDFrameObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.ArenaCode.GDSpeedValueObjects2.length ;i < len;++i) {
    gdjs.ArenaCode.GDSpeedValueObjects2[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.ArenaCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ArenaCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0)))));
}
}}

}


{


{
}

}


};gdjs.ArenaCode.eventsList2 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{


gdjs.ArenaCode.eventsList0(runtimeScene);
}


{


gdjs.ArenaCode.eventsList1(runtimeScene);
}


};

gdjs.ArenaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ArenaCode.GDHeartObjects1.length = 0;
gdjs.ArenaCode.GDHeartObjects2.length = 0;
gdjs.ArenaCode.GDHeartObjects3.length = 0;
gdjs.ArenaCode.GDPlayerObjects1.length = 0;
gdjs.ArenaCode.GDPlayerObjects2.length = 0;
gdjs.ArenaCode.GDPlayerObjects3.length = 0;
gdjs.ArenaCode.GDFrameObjects1.length = 0;
gdjs.ArenaCode.GDFrameObjects2.length = 0;
gdjs.ArenaCode.GDFrameObjects3.length = 0;
gdjs.ArenaCode.GDFrameTextObjects1.length = 0;
gdjs.ArenaCode.GDFrameTextObjects2.length = 0;
gdjs.ArenaCode.GDFrameTextObjects3.length = 0;
gdjs.ArenaCode.GDCurrentSpeedObjects1.length = 0;
gdjs.ArenaCode.GDCurrentSpeedObjects2.length = 0;
gdjs.ArenaCode.GDCurrentSpeedObjects3.length = 0;
gdjs.ArenaCode.GDSpeedValueObjects1.length = 0;
gdjs.ArenaCode.GDSpeedValueObjects2.length = 0;
gdjs.ArenaCode.GDSpeedValueObjects3.length = 0;

gdjs.ArenaCode.eventsList2(runtimeScene);
return;

}

gdjs['ArenaCode'] = gdjs.ArenaCode;
