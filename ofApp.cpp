#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	//loading the shader
	//ofEnableDepthTest();
	ofBackground(240);
	shader.load("", "shader.frag");

	//initializing my variables:
	value = 0.0f;
	shine = 3.;
	broken = 1;

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
	
	//the window frame:
	ofPushMatrix();
	ofSetColor(0);
	ofRect(ofGetWidth() / 4 -50, ofGetHeight() / 4 -140, 920, 700);
	ofPopMatrix();
	
	//shader:

	shader.begin();
	//setting up the uniforms i will be using in my shader:
	shader.setUniform1f("time", ofGetElapsedTimef());
	shader.setUniform1f("value", value);
	shader.setUniform2f("res", ofGetWidth(), ofGetHeight());
	shader.setUniform1f("shine", shine);
	shader.setUniform1f("broken", broken);

	//the shader is set to the rectangle (window) 
	ofRect(ofGetWidth()/4, ofGetHeight()/4-100, 380,500);
	ofRect(ofGetWidth()/4 +435, ofGetHeight()/4 -100, 380,500);
	shader.end();
	
	
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
	//Reload everytime you press a key
	shader.load("", "shader.frag");
	//each key has a functionality:

	//SPEED 
	//extreme left makes it turn into lava
	if (key == 'a')
	{
		value += 0.1;
	}

	//extreme right makes it turn into water
	if (key == 'd')
	{
		value -= 0.1;
	}

	//SHINE 
	//zooms out
	if (key == 'q')
	{
		shine += 0.1;
	}
	
	//zooms in
	if (key == 'e')
	{
		shine -= 0.1;
	}

	//GLASS SHARDS
	//breaks the window glass
	if (key == 'b')
	{
		broken += 5;
	}

	//fixes the broken glass
    if (key == 'n')
	{
		broken = 1;
	}
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
