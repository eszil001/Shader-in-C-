#ifdef GL_ES
precision mediump float;
#endif
//setting up the uniforms i will be using:
uniform vec2 res;
uniform float time;
uniform float value;
uniform float shine;
uniform float broken;

//the noise codes, inspired from the lecture with some alterations:
//----------------------------------------------------------------------------------------------------------------------
float random (in vec2 noises) 
{
    return fract(sin(dot(noises.xy, vec2(12.9898,78.233)))* 43758.5453123);
}
float noise (in vec2 noises) 
{
    vec2 i = floor(noises);
    vec2 z = fract(noises);

    //the 4 corners of the shader (rect)
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
	//i am * by broken in order to create the broken glass effect i wanted:
    float c = random(i + vec2(0.0, 1.0) * broken);
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = z * z * (3.0 - 2.0 * z);
    return mix(a, b, u.x) +(c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
//----------------------------------------------------------------------------------------------------------------------

#define NUM_OCTAVES 5

//fbm shader
//----------------------------------------------------------------------------------------------------------------------
float fbm ( in vec2 noises) 
{
    //setting up the variables first
    float start = 0.0;
    float end = 0.5;
    vec2 shift = vec2(100.0);

	//the rotation of the waves:
    mat2 rotation = mat2(cos(0.5), sin(0.5),-sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        start += end * noise(noises);
        noises = rotation * noises * 2.0 + shift;
        end*= 0.5;
    }
    return start;
}
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
void main() {
    //calling the gl_FragCoord:
    vec2 noises = gl_FragCoord.xy/res.xy*shine;

	//setting the color to my imput value, which is changed by pressing q or e
    vec3 color = vec3(value);

	//the speed of how fast the noise is moving:
    vec2 a = vec2(0.);
    a.x = fbm( noises + 1.00*time);
    a.y = fbm( noises + vec2(1.0));

    //value also changes the shape of the wave by pressing a or d
    vec2 r = vec2(0.);
    r.x = fbm( noises + 1.0 * a + vec2(1.7,9.2) + 0.15 * time  *value);
    r.y = fbm( noises + 1.0 * a + vec2(8.3,2.8) + 0.126 * time *value);

    float i = fbm(noises + r * value);

	//setting up the color to be affected by my input value:
    color = mix(vec3(0.101961,0.619608,0.666667), vec3(2.666667,0.666667,0.498039), clamp((i*i)*4.0,0.0,1.0) * value);
    color = mix(color, vec3(0,0,0.1), clamp(length(a),0.0,1.0));
    color = mix(color, vec3(0.666667,1,1), clamp(length(r.x),0.0,1.0));
    gl_FragColor = vec4((i * i * i +.6 * i * i + .5 * i )*color,1.);
}
//----------------------------------------------------------------------------------------------------------------------