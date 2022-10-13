var $ccEZ2$three = require("three");
var $ccEZ2$gsap = require("gsap");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



class $11930077dfc17798$export$2e2bcd8739ae039 {
    constructor(element, camera){
        this.element = element;
        this.elements = {
            number: element.querySelector(".section__title-number"),
            title: element.querySelector(".section__title-text"),
            arrows: element.querySelectorAll(".section__title-arrow span"),
            paragraph: element.querySelector(".section__paragraph"),
            button: element.querySelector(".section__button")
        };
        this.camera = camera;
        this.animateIn();
    }
    animateIn() {
        const animateIn = (0, ($parcel$interopDefault($ccEZ2$gsap))).timeline({
            defaults: {
                ease: "expo"
            }
        });
        animateIn.from(this.camera.position, {
            z: 4,
            duration: 3
        }).from([
            this.elements.number,
            this.elements.title,
            this.elements.text,
            this.elements.paragraph,
            this.elements.button,
            this.elements.arrows
        ], {
            y: -100,
            autoAlpha: 0,
            stagger: .2,
            duration: 1.6
        }, "<.3");
    }
}



class $41b09d412e674c69$export$2e2bcd8739ae039 {
    constructor({ element: element , viewport: viewport , scroll: scroll  }){
        this.element = element;
        this.viewport = viewport;
        this.scroll = scroll;
        this.elements = {
            scrollContent: this.element.querySelector(".scroll__content")
        };
    }
    setSizes() {
        this.scroll.height = this.elements.scrollContent.getBoundingClientRect().height;
        this.scroll.limit = this.elements.scrollContent.clientHeight - this.viewport.height;
        document.body.style.height = `${this.scroll.height}px`;
    }
    update() {
        this.scroll.hard = window.scrollY;
        this.scroll.hard = (0, ($parcel$interopDefault($ccEZ2$gsap))).utils.clamp(0, this.scroll.limit, this.scroll.hard);
        this.scroll.soft = (0, ($parcel$interopDefault($ccEZ2$gsap))).utils.interpolate(this.scroll.soft, this.scroll.hard, this.scroll.ease);
        if (this.scroll.soft < 0.01) this.scroll.soft = 0;
        this.elements.scrollContent.style.transform = `translateY(${-this.scroll.soft}px)`;
    }
    onResize() {
        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.setSizes();
    }
}


var $4db6cc6484f60b03$exports = {};
$4db6cc6484f60b03$exports = "#define GLSLIFY 1\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// https://github.com/dmnsgn/glsl-rotate\nmat3 rotation3dY(float angle) {\n    float s = sin(angle);\n    float c = cos(angle);\n\n    return mat3(\n      c, 0.0, -s,\n      0.0, 1.0, 0.0,\n      s, 0.0, c\n    );\n  }\n  \nvec3 rotateY(vec3 v, float angle) {\n  return rotation3dY(angle) * v;\n}\n\n//\n\nuniform float uFrequency;\nuniform float uAmplitude;\nuniform float uDensity;\nuniform float uStrength;\n\nvarying float vDistortion;\n\nvoid main() {  \n  float distortion = pnoise(normal * uDensity, vec3(10.)) * uStrength;\n\n  vec3 pos = position + (normal * distortion);\n  float angle = sin(uv.y * uFrequency) * uAmplitude;\n  pos = rotateY(pos, angle);    \n    \n  vDistortion = distortion;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n}\n";


var $00c19cc742fbdfb8$exports = {};
$00c19cc742fbdfb8$exports = "#define GLSLIFY 1\nuniform float uOpacity;\nuniform float uDeepPurple;\n \nvarying float vDistortion;\n\nvec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {\n  return a + b * cos(6.28318 * (c * t + d));\n  \n}     \n \nvoid main() {\n  float distort = vDistortion * 3.;\n\n  vec3 brightness = vec3(.1, .1, .9);\n  vec3 contrast = vec3(.3, .3, .3);\n  vec3 oscilation = vec3(.5, .5, .9);\n  vec3 phase = vec3(.9, .1, .8);\n \n  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);\n  \n  gl_FragColor = vec4(color, vDistortion);\n  gl_FragColor += vec4(min(uDeepPurple, 1.), 0., .5, min(uOpacity, 1.));\n}\n";


class $c0ef9725be2329aa$var$ScrollStage {
    constructor(){
        this.element = document.querySelector(".content");
        this.elements = {
            line: this.element.querySelector(".layout__line")
        };
        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.mouse = {
            x: 0,
            y: 0
        };
        this.scroll = {
            height: 0,
            limit: 0,
            hard: 0,
            soft: 0,
            ease: 0.05,
            normalized: 0,
            running: false
        };
        this.settings = {
            // vertex
            uFrequency: {
                start: 0,
                end: 4
            },
            uAmplitude: {
                start: 4,
                end: 4
            },
            uDensity: {
                start: 1,
                end: 1
            },
            uStrength: {
                start: 0,
                end: 1.1
            },
            // fragment
            uDeepPurple: {
                start: 1,
                end: 0
            },
            uOpacity: {
                start: .1,
                end: .66
            }
        };
        this.scene = new $ccEZ2$three.Scene();
        this.renderer = new $ccEZ2$three.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.canvas = this.renderer.domElement;
        this.camera = new $ccEZ2$three.PerspectiveCamera(75, this.viewport.width / this.viewport.height, .1, 10);
        this.clock = new $ccEZ2$three.Clock();
        this.smoothScroll = new (0, $41b09d412e674c69$export$2e2bcd8739ae039)({
            element: this.element,
            viewport: this.viewport,
            scroll: this.scroll
        });
        (0, ($parcel$interopDefault($ccEZ2$gsap))).defaults({
            ease: "power2",
            duration: 6.6,
            overwrite: true
        });
        this.updateScrollAnimations = this.updateScrollAnimations.bind(this);
        this.update = this.update.bind(this);
        this.init();
    }
    init() {
        this.addCanvas();
        this.addCamera();
        this.addMesh();
        this.addEventListeners();
        this.onResize();
        this.update();
    }
    /**
   * STAGE
   */ addCanvas() {
        this.canvas.classList.add("webgl");
        document.body.appendChild(this.canvas);
    }
    addCamera() {
        this.camera.position.set(0, 0, 2.5);
        this.scene.add(this.camera);
    }
    /**
   * OBJECT
   */ addMesh() {
        this.geometry = new $ccEZ2$three.IcosahedronGeometry(1, 64);
        this.material = new $ccEZ2$three.ShaderMaterial({
            wireframe: true,
            blending: $ccEZ2$three.AdditiveBlending,
            transparent: true,
            vertexShader: (/*@__PURE__*/$parcel$interopDefault($4db6cc6484f60b03$exports)),
            fragmentShader: (/*@__PURE__*/$parcel$interopDefault($00c19cc742fbdfb8$exports)),
            uniforms: {
                uFrequency: {
                    value: this.settings.uFrequency.start
                },
                uAmplitude: {
                    value: this.settings.uAmplitude.start
                },
                uDensity: {
                    value: this.settings.uDensity.start
                },
                uStrength: {
                    value: this.settings.uStrength.start
                },
                uDeepPurple: {
                    value: this.settings.uDeepPurple.start
                },
                uOpacity: {
                    value: this.settings.uOpacity.start
                }
            }
        });
        this.mesh = new $ccEZ2$three.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }
    /**
   * SCROLL BASED ANIMATIONS
   */ updateScrollAnimations() {
        this.scroll.running = false;
        this.scroll.normalized = (this.scroll.hard / this.scroll.limit).toFixed(1);
        (0, ($parcel$interopDefault($ccEZ2$gsap))).to(this.mesh.rotation, {
            x: this.scroll.normalized * Math.PI
        });
        (0, ($parcel$interopDefault($ccEZ2$gsap))).to(this.elements.line, {
            scaleX: this.scroll.normalized,
            transformOrigin: "left",
            duration: 1.5,
            ease: "ease"
        });
        for(const key in this.settings)if (this.settings[key].start !== this.settings[key].end) (0, ($parcel$interopDefault($ccEZ2$gsap))).to(this.mesh.material.uniforms[key], {
            value: this.settings[key].start + this.scroll.normalized * (this.settings[key].end - this.settings[key].start)
        });
    }
    /**
   * EVENTS
   */ addEventListeners() {
        window.addEventListener("load", this.onLoad.bind(this));
        // window.addEventListener('mousemove', this.onMouseMove.bind(this))  // enable for soundcheck (→ console)
        window.addEventListener("scroll", this.onScroll.bind(this));
        window.addEventListener("resize", this.onResize.bind(this));
    }
    onLoad() {
        document.body.classList.remove("loading");
        this.animations = new (0, $11930077dfc17798$export$2e2bcd8739ae039)(this.element, this.camera);
    }
    onMouseMove(event) {
        // play with it!
        // enable / disable / change x, y, multiplier …
        this.mouse.x = (event.clientX / this.viewport.width).toFixed(2) * 4;
        this.mouse.y = (event.clientY / this.viewport.height).toFixed(2) * 2;
        (0, ($parcel$interopDefault($ccEZ2$gsap))).to(this.mesh.material.uniforms.uFrequency, {
            value: this.mouse.x
        });
        (0, ($parcel$interopDefault($ccEZ2$gsap))).to(this.mesh.material.uniforms.uAmplitude, {
            value: this.mouse.x
        });
        (0, ($parcel$interopDefault($ccEZ2$gsap))).to(this.mesh.material.uniforms.uDensity, {
            value: this.mouse.y
        });
        (0, ($parcel$interopDefault($ccEZ2$gsap))).to(this.mesh.material.uniforms.uStrength, {
            value: this.mouse.y
        });
        // GSAP.to(this.mesh.material.uniforms.uDeepPurple, { value: this.mouse.x })
        // GSAP.to(this.mesh.material.uniforms.uOpacity, { value: this.mouse.y })
        console.info(`X: ${this.mouse.x}  |  Y: ${this.mouse.y}`);
    }
    onScroll() {
        if (!this.scroll.running) {
            window.requestAnimationFrame(this.updateScrollAnimations);
            this.scroll.running = true;
        }
    }
    onResize() {
        this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        this.smoothScroll.onResize();
        if (this.viewport.width < this.viewport.height) this.mesh.scale.set(.75, .75, .75);
        else this.mesh.scale.set(1, 1, 1);
        this.camera.aspect = this.viewport.width / this.viewport.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    }
    /**
   * LOOP
   */ update() {
        const elapsedTime = this.clock.getElapsedTime();
        this.mesh.rotation.y = elapsedTime * .05;
        this.smoothScroll.update();
        this.render();
        window.requestAnimationFrame(this.update);
    }
    /**
   * RENDER
   */ render() {
        this.renderer.render(this.scene, this.camera);
    }
}
new $c0ef9725be2329aa$var$ScrollStage();


//# sourceMappingURL=index.js.map
