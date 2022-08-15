import { ISourceOptions } from 'tsparticles-engine';

export const particlesConfig: ISourceOptions = {
    background: {
      color: {
        value: '#000000'
      },
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover'
    },
    fullScreen: {
      zIndex: 1
    },
    interactivity: {
      events: {
        onClick: {
          mode: 'repulse'
        },
        onHover: {
          mode: 'bubble'
        }
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: {
          distance: 200
        },
        bubble: {
          distance: 400,
          duration: 0.3,
          mix: false,
          opacity: 1,
          size: 4,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: []
          }
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 0.5
          }
        },
        push: {
          default: true,
          groups: [],
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
            selectors: []
          }
        },
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1
        },
        light: {
          area: {
            gradient: {
              start: {
                value: '#ffffff'
              },
              stop: {
                value: '#000000'
              }
            },
            radius: 1000
          },
          shadow: {
            color: {
              value: '#000000'
            },
            length: 2000
          }
        }
      }
    },
    particles: {
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200
          }
        },
        enable: true,
        path: {},
        outModes: 'none',
        speed: 0.5,
        spin: {}
      },
      number: {
        density: {
          enable: true
        },
        value: 400
      },
      opacity: {
        random: true,
        value: {
          min: 0.1,
          max: 0.4
        },
        animation: {
          speed: 0.25,
          minimumValue: 0.1
        }
      },
      rotate: {
        animation: {
          speed: 22.5
        }
      },
      shape: {
        type: 'square'
      },
      size: {
        random: true,
        value: {
          min: 1,
          max: 5
        },
        animation: {
          speed: 40,
          minimumValue: 0.1
        }
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          sync: false
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001
          },
          value: 0,
          sync: false
        }
      },
      roll: {
        darken: {
          enable: false,
          value: 0
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0
        },
        mode: 'vertical',
        speed: 25
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: 'clockwise',
        enable: false
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        },
        particles: {
          enable: false,
          frequency: 10,
          opacity: 10
        }
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10
        }
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 10,
          decay: 0,
          sync: false
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 45
        },
        width: 1
      },
      links: {
        blink: false,
        color: {
          value: '#ffffff'
        },
        consent: false,
        distance: 500,
        enable: false,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: '#000'
          },
          enable: false
        },
        triangles: {
          enable: false,
          frequency: 1
        },
        width: 2,
        warp: false
      },
      repulse: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1
      }
    }
}
