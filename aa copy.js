/*! For license information please see jj_circle_event.js.LICENSE.txt */
(() => {
    var e = {
        154: function (e, t, s) {
            var i, r, a;

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            a = function () {
                function e(e, t) {
                    for (var s = 0; s < t.length; s++) {
                        var i = t[s];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, (void 0, r = function (e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var s = e[Symbol.toPrimitive];
                            if (void 0 !== s) {
                                var i = s.call(e, "string");
                                if ("object" !== n(i)) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(i.key), "symbol" === n(r) ? r : String(r)), i)
                    }
                    var r
                }

                function t(t, s, i) {
                    return s && e(t.prototype, s), i && e(t, i), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t
                }

                function s() {
                    return s = Object.assign ? Object.assign.bind() : function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = arguments[t];
                            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                        }
                        return e
                    }, s.apply(this, arguments)
                }

                function i(e, t, s) {
                    return Math.max(e, Math.min(t, s))
                }
                var r = function () {
                    function e() { }
                    var t = e.prototype;
                    return t.advance = function (e) {
                        var t;
                        if (this.isRunning) {
                            var s, r, a, n, o = !1;
                            if (this.lerp) this.value = (s = this.value, r = this.to, a = 60 * this.lerp, n = e, function (e, t, s) {
                                return (1 - s) * e + s * t
                            }(s, r, 1 - Math.exp(-a * n))), Math.round(this.value) === this.to && (this.value = this.to, o = !0);
                            else {
                                this.currentTime += e;
                                var l = i(0, this.currentTime / this.duration, 1),
                                    d = (o = l >= 1) ? 1 : this.easing(l);
                                this.value = this.from + (this.to - this.from) * d
                            }
                            null == (t = this.onUpdate) || t.call(this, this.value, {
                                completed: o
                            }), o && this.stop()
                        }
                    }, t.stop = function () {
                        this.isRunning = !1
                    }, t.fromTo = function (e, t, s) {
                        var i = s.lerp,
                            r = void 0 === i ? .1 : i,
                            a = s.duration,
                            n = void 0 === a ? 1 : a,
                            o = s.easing,
                            l = void 0 === o ? function (e) {
                                return e
                            } : o,
                            d = s.onUpdate;
                        this.from = this.value = e, this.to = t, this.lerp = r, this.duration = n, this.easing = l, this.currentTime = 0, this.isRunning = !0, this.onUpdate = d
                    }, e
                }(),
                    a = function () {
                        function e(e) {
                            var t, s, i = this,
                                r = void 0 === e ? {} : e,
                                a = r.wrapper,
                                n = r.content,
                                o = r.autoResize,
                                l = void 0 === o || o;
                            if (this.resize = function () {
                                i.onWrapperResize(), i.onContentResize()
                            }, this.onWrapperResize = function () {
                                i.wrapper === window ? (i.width = window.innerWidth, i.height = window.innerHeight) : (i.width = i.wrapper.clientWidth, i.height = i.wrapper.clientHeight)
                            }, this.onContentResize = function () {
                                i.scrollHeight = i.content.scrollHeight, i.scrollWidth = i.content.scrollWidth
                            }, this.wrapper = a, this.content = n, l) {
                                var d = (t = this.resize, 250, function () {
                                    var e = arguments,
                                        i = this;
                                    clearTimeout(s), s = setTimeout((function () {
                                        t.apply(i, e)
                                    }), 250)
                                });
                                this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(d), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(d), this.contentResizeObserver.observe(this.content)
                            }
                            this.resize()
                        }
                        return e.prototype.destroy = function () {
                            var e, t;
                            null == (e = this.wrapperResizeObserver) || e.disconnect(), null == (t = this.contentResizeObserver) || t.disconnect()
                        }, t(e, [{
                            key: "limit",
                            get: function () {
                                return {
                                    x: this.scrollWidth - this.width,
                                    y: this.scrollHeight - this.height
                                }
                            }
                        }]), e
                    }(),
                    o = function () {
                        function e(e, t) {
                            var s = this,
                                r = t.wheelMultiplier,
                                a = void 0 === r ? 1 : r,
                                n = t.touchMultiplier,
                                o = void 0 === n ? 2 : n,
                                l = t.normalizeWheel,
                                d = void 0 !== l && l;
                            this.onTouchStart = function (e) {
                                var t = e.targetTouches ? e.targetTouches[0] : e,
                                    i = t.clientX,
                                    r = t.clientY;
                                s.touchStart.x = i, s.touchStart.y = r, s.lastDelta = {
                                    x: 0,
                                    y: 0
                                }
                            }, this.onTouchMove = function (e) {
                                var t = e.targetTouches ? e.targetTouches[0] : e,
                                    i = t.clientX,
                                    r = t.clientY,
                                    a = -(i - s.touchStart.x) * s.touchMultiplier,
                                    n = -(r - s.touchStart.y) * s.touchMultiplier;
                                s.touchStart.x = i, s.touchStart.y = r, s.lastDelta = {
                                    x: a,
                                    y: n
                                }, s.emitter.emit("scroll", {
                                    type: "touch",
                                    deltaX: a,
                                    deltaY: n,
                                    event: e
                                })
                            }, this.onTouchEnd = function (e) {
                                s.emitter.emit("scroll", {
                                    type: "touch",
                                    inertia: !0,
                                    deltaX: s.lastDelta.x,
                                    deltaY: s.lastDelta.y,
                                    event: e
                                })
                            }, this.onWheel = function (e) {
                                var t = e.deltaX,
                                    r = e.deltaY;
                                s.normalizeWheel && (t = i(-100, t, 100), r = i(-100, r, 100)), t *= s.wheelMultiplier, r *= s.wheelMultiplier, s.emitter.emit("scroll", {
                                    type: "wheel",
                                    deltaX: t,
                                    deltaY: r,
                                    event: e
                                })
                            }, this.element = e, this.wheelMultiplier = a, this.touchMultiplier = o, this.normalizeWheel = d, this.touchStart = {
                                x: null,
                                y: null
                            }, this.emitter = {
                                events: {},
                                emit: function (e) {
                                    for (var t = this.events[e] || [], s = 0, i = t.length; s < i; s++) t[s].apply(t, [].slice.call(arguments, 1))
                                },
                                on: function (e, t) {
                                    var s, i = this;
                                    return (null == (s = this.events[e]) ? void 0 : s.push(t)) || (this.events[e] = [t]),
                                        function () {
                                            var s;
                                            i.events[e] = null == (s = i.events[e]) ? void 0 : s.filter((function (e) {
                                                return t !== e
                                            }))
                                        }
                                }
                            }, this.element.addEventListener("wheel", this.onWheel, {
                                passive: !1
                            }), this.element.addEventListener("touchstart", this.onTouchStart, {
                                passive: !1
                            }), this.element.addEventListener("touchmove", this.onTouchMove, {
                                passive: !1
                            }), this.element.addEventListener("touchend", this.onTouchEnd, {
                                passive: !1
                            })
                        }
                        var t = e.prototype;
                        return t.on = function (e, t) {
                            return this.emitter.on(e, t)
                        }, t.destroy = function () {
                            this.emitter.events = {}, this.element.removeEventListener("wheel", this.onWheel, {
                                passive: !1
                            }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                                passive: !1
                            }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                                passive: !1
                            }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                                passive: !1
                            })
                        }, e
                    }(),
                    l = function () {
                        function e(e) {
                            var t = this,
                                i = void 0 === e ? {} : e,
                                n = i.direction,
                                l = i.gestureDirection,
                                d = i.mouseMultiplier,
                                h = i.smooth,
                                c = i.wrapper,
                                p = void 0 === c ? window : c,
                                u = i.content,
                                m = void 0 === u ? document.documentElement : u,
                                g = i.wheelEventsTarget,
                                f = void 0 === g ? p : g,
                                v = i.smoothWheel,
                                x = void 0 === v ? null == h || h : v,
                                b = i.smoothTouch,
                                w = void 0 !== b && b,
                                y = i.syncTouch,
                                _ = void 0 !== y && y,
                                T = i.syncTouchLerp,
                                E = void 0 === T ? .1 : T,
                                S = i.touchInertiaMultiplier,
                                C = void 0 === S ? 35 : S,
                                M = i.duration,
                                P = i.easing,
                                R = void 0 === P ? function (e) {
                                    return Math.min(1, 1.001 - Math.pow(2, -10 * e))
                                } : P,
                                $ = i.lerp,
                                k = void 0 === $ ? M ? null : .1 : $,
                                L = i.infinite,
                                z = void 0 !== L && L,
                                A = i.orientation,
                                O = void 0 === A ? null != n ? n : "vertical" : A,
                                I = i.gestureOrientation,
                                D = void 0 === I ? null != l ? l : "vertical" : I,
                                F = i.touchMultiplier,
                                V = void 0 === F ? 1 : F,
                                N = i.wheelMultiplier,
                                B = void 0 === N ? null != d ? d : 1 : N,
                                U = i.normalizeWheel,
                                W = void 0 !== U && U,
                                G = i.autoResize,
                                j = void 0 === G || G;
                            this.onVirtualScroll = function (e) {
                                var i = e.type,
                                    r = e.inertia,
                                    a = e.deltaX,
                                    n = e.deltaY,
                                    o = e.event;
                                if (!o.ctrlKey) {
                                    var l = "touch" === i,
                                        d = "wheel" === i;
                                    if (!("vertical" === t.options.gestureOrientation && 0 === n || "horizontal" === t.options.gestureOrientation && 0 === a || l && "vertical" === t.options.gestureOrientation && 0 === t.scroll && !t.options.infinite && n <= 0 || o.composedPath().find((function (e) {
                                        return (null == e || null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent")) || l && (null == e || null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-touch")) || d && (null == e || null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-wheel"))
                                    }))))
                                        if (t.isStopped || t.isLocked) o.preventDefault();
                                        else {
                                            if (t.isSmooth = (t.options.smoothTouch || t.options.syncTouch) && l || t.options.smoothWheel && d, !t.isSmooth) return t.isScrolling = !1, void t.animate.stop();
                                            o.preventDefault();
                                            var h = n;
                                            "both" === t.options.gestureOrientation ? h = Math.abs(n) > Math.abs(a) ? n : a : "horizontal" === t.options.gestureOrientation && (h = a);
                                            var c = l && t.options.syncTouch,
                                                p = l && r && Math.abs(h) > 1;
                                            p && (h = t.velocity * t.options.touchInertiaMultiplier), t.scrollTo(t.targetScroll + h, s({
                                                programmatic: !1
                                            }, c && {
                                                lerp: p ? t.syncTouchLerp : .4
                                            }))
                                        }
                                }
                            }, this.onScroll = function () {
                                if (!t.isScrolling) {
                                    var e = t.animatedScroll;
                                    t.animatedScroll = t.targetScroll = t.actualScroll, t.velocity = 0, t.direction = Math.sign(t.animatedScroll - e), t.emit()
                                }
                            }, n && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"), l && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"), d && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"), h && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"), window.lenisVersion = "1.0.15", p !== document.documentElement && p !== document.body || (p = window), this.options = {
                                wrapper: p,
                                content: m,
                                wheelEventsTarget: f,
                                smoothWheel: x,
                                smoothTouch: w,
                                syncTouch: _,
                                syncTouchLerp: E,
                                touchInertiaMultiplier: C,
                                duration: M,
                                easing: R,
                                lerp: k,
                                infinite: z,
                                gestureOrientation: D,
                                orientation: O,
                                touchMultiplier: V,
                                wheelMultiplier: B,
                                normalizeWheel: W,
                                autoResize: j
                            }, this.dimensions = new a({
                                wrapper: p,
                                content: m,
                                autoResize: j
                            }), this.rootElement.classList.add("lenis"), this.velocity = 0, this.isStopped = !1, this.isSmooth = x || w, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.animate = new r, this.emitter = {
                                events: {},
                                emit: function (e) {
                                    for (var t = this.events[e] || [], s = 0, i = t.length; s < i; s++) t[s].apply(t, [].slice.call(arguments, 1))
                                },
                                on: function (e, t) {
                                    var s, i = this;
                                    return (null == (s = this.events[e]) ? void 0 : s.push(t)) || (this.events[e] = [t]),
                                        function () {
                                            var s;
                                            i.events[e] = null == (s = i.events[e]) ? void 0 : s.filter((function (e) {
                                                return t !== e
                                            }))
                                        }
                                }
                            }, this.options.wrapper.addEventListener("scroll", this.onScroll, {
                                passive: !1
                            }), this.virtualScroll = new o(f, {
                                touchMultiplier: V,
                                wheelMultiplier: B,
                                normalizeWheel: W
                            }), this.virtualScroll.on("scroll", this.onVirtualScroll)
                        }
                        var n = e.prototype;
                        return n.destroy = function () {
                            this.emitter.events = {}, this.options.wrapper.removeEventListener("scroll", this.onScroll, {
                                passive: !1
                            }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.rootElement.classList.remove("lenis"), this.rootElement.classList.remove("lenis-smooth"), this.rootElement.classList.remove("lenis-scrolling"), this.rootElement.classList.remove("lenis-stopped")
                        }, n.on = function (e, t) {
                            return this.emitter.on(e, t)
                        }, n.off = function (e, t) {
                            var s;
                            this.emitter.events[e] = null == (s = this.emitter.events[e]) ? void 0 : s.filter((function (e) {
                                return t !== e
                            }))
                        }, n.setScroll = function (e) {
                            this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
                        }, n.resize = function () {
                            this.dimensions.resize()
                        }, n.emit = function () {
                            this.emitter.emit("scroll", this)
                        }, n.reset = function () {
                            this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop()
                        }, n.start = function () {
                            this.isStopped = !1, this.reset()
                        }, n.stop = function () {
                            this.isStopped = !0, this.animate.stop(), this.reset()
                        }, n.raf = function (e) {
                            var t = e - (this.time || e);
                            this.time = e, this.animate.advance(.001 * t)
                        }, n.scrollTo = function (e, t) {
                            var s = this,
                                r = void 0 === t ? {} : t,
                                a = r.offset,
                                n = void 0 === a ? 0 : a,
                                o = r.immediate,
                                l = void 0 !== o && o,
                                d = r.lock,
                                h = void 0 !== d && d,
                                c = r.duration,
                                p = void 0 === c ? this.options.duration : c,
                                u = r.easing,
                                m = void 0 === u ? this.options.easing : u,
                                g = r.lerp,
                                f = void 0 === g ? !p && this.options.lerp : g,
                                v = r.onComplete,
                                x = void 0 === v ? null : v,
                                b = r.force,
                                w = void 0 !== b && b,
                                y = r.programmatic,
                                _ = void 0 === y || y;
                            if (!this.isStopped || w) {
                                if (["top", "left", "start"].includes(e)) e = 0;
                                else if (["bottom", "right", "end"].includes(e)) e = this.limit;
                                else {
                                    var T, E;
                                    if ("string" == typeof e ? E = document.querySelector(e) : null != (T = e) && T.nodeType && (E = e), E) {
                                        if (this.options.wrapper !== window) {
                                            var S = this.options.wrapper.getBoundingClientRect();
                                            n -= this.isHorizontal ? S.left : S.top
                                        }
                                        var C = E.getBoundingClientRect();
                                        e = (this.isHorizontal ? C.left : C.top) + this.animatedScroll
                                    }
                                }
                                if ("number" == typeof e) {
                                    if (e += n, e = Math.round(e), this.options.infinite ? _ && (this.targetScroll = this.animatedScroll = this.scroll) : e = i(0, e, this.limit), l) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.emit(), void (null == x || x());
                                    if (!_) {
                                        if (e === this.targetScroll) return;
                                        this.targetScroll = e
                                    }
                                    this.animate.fromTo(this.animatedScroll, e, {
                                        duration: p,
                                        easing: m,
                                        lerp: f,
                                        onUpdate: function (e, t) {
                                            var i = t.completed;
                                            h && (s.isLocked = !0), s.isScrolling = !0, s.velocity = e - s.animatedScroll, s.direction = Math.sign(s.velocity), s.animatedScroll = e, s.setScroll(s.scroll), _ && (s.targetScroll = e), i && (h && (s.isLocked = !1), requestAnimationFrame((function () {
                                                s.isScrolling = !1
                                            })), s.velocity = 0, null == x || x()), s.emit()
                                        }
                                    })
                                }
                            }
                        }, t(e, [{
                            key: "rootElement",
                            get: function () {
                                return this.options.wrapper === window ? this.options.content : this.options.wrapper
                            }
                        }, {
                            key: "limit",
                            get: function () {
                                return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y
                            }
                        }, {
                            key: "isHorizontal",
                            get: function () {
                                return "horizontal" === this.options.orientation
                            }
                        }, {
                            key: "actualScroll",
                            get: function () {
                                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                            }
                        }, {
                            key: "scroll",
                            get: function () {
                                return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll;
                                var e
                            }
                        }, {
                            key: "progress",
                            get: function () {
                                return 0 === this.limit ? 1 : this.scroll / this.limit
                            }
                        }, {
                            key: "isSmooth",
                            get: function () {
                                return this.__isSmooth
                            },
                            set: function (e) {
                                this.__isSmooth !== e && (this.rootElement.classList.toggle("lenis-smooth", e), this.__isSmooth = e)
                            }
                        }, {
                            key: "isScrolling",
                            get: function () {
                                return this.__isScrolling
                            },
                            set: function (e) {
                                this.__isScrolling !== e && (this.rootElement.classList.toggle("lenis-scrolling", e), this.__isScrolling = e)
                            }
                        }, {
                            key: "isStopped",
                            get: function () {
                                return this.__isStopped
                            },
                            set: function (e) {
                                this.__isStopped !== e && (this.rootElement.classList.toggle("lenis-stopped", e), this.__isStopped = e)
                            }
                        }]), e
                    }();
                return l
            }, "object" === n(t) ? e.exports = a() : void 0 === (r = "function" == typeof (i = a) ? i.call(t, s, t, e) : i) || (e.exports = r)
        },
        473: function (e, t, s) {
            var i, r, a;

            function n() {
                "use strict";
                n = function () {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    i = Object.defineProperty || function (e, t, s) {
                        e[t] = s.value
                    },
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    d = r.toStringTag || "@@toStringTag";

                function h(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    h({}, "")
                } catch (e) {
                    h = function (e, t, s) {
                        return e[t] = s
                    }
                }

                function c(e, t, s, r) {
                    var a = t && t.prototype instanceof m ? t : m,
                        n = Object.create(a.prototype),
                        o = new M(r || []);
                    return i(n, "_invoke", {
                        value: T(e, s, o)
                    }), n
                }

                function p(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function m() { }

                function g() { }

                function f() { }
                var v = {};
                h(v, a, (function () {
                    return this
                }));
                var x = Object.getPrototypeOf,
                    b = x && x(x(P([])));
                b && b !== t && s.call(b, a) && (v = b);
                var w = f.prototype = m.prototype = Object.create(v);

                function y(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        h(e, t, (function (e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    function r(i, a, n, o) {
                        var d = p(e[i], e, a);
                        if ("throw" !== d.type) {
                            var h = d.arg,
                                c = h.value;
                            return c && "object" == l(c) && s.call(c, "__await") ? t.resolve(c.__await).then((function (e) {
                                r("next", e, n, o)
                            }), (function (e) {
                                r("throw", e, n, o)
                            })) : t.resolve(c).then((function (e) {
                                h.value = e, n(h)
                            }), (function (e) {
                                return r("throw", e, n, o)
                            }))
                        }
                        o(d.arg)
                    }
                    var a;
                    i(this, "_invoke", {
                        value: function (e, s) {
                            function i() {
                                return new t((function (t, i) {
                                    r(e, s, t, i)
                                }))
                            }
                            return a = a ? a.then(i, i) : i()
                        }
                    })
                }

                function T(e, t, s) {
                    var i = "suspendedStart";
                    return function (r, a) {
                        if ("executing" === i) throw new Error("Generator is already running");
                        if ("completed" === i) {
                            if ("throw" === r) throw a;
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        for (s.method = r, s.arg = a; ;) {
                            var n = s.delegate;
                            if (n) {
                                var o = E(n, s);
                                if (o) {
                                    if (o === u) continue;
                                    return o
                                }
                            }
                            if ("next" === s.method) s.sent = s._sent = s.arg;
                            else if ("throw" === s.method) {
                                if ("suspendedStart" === i) throw i = "completed", s.arg;
                                s.dispatchException(s.arg)
                            } else "return" === s.method && s.abrupt("return", s.arg);
                            i = "executing";
                            var l = p(e, t, s);
                            if ("normal" === l.type) {
                                if (i = s.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                return {
                                    value: l.arg,
                                    done: s.done
                                }
                            }
                            "throw" === l.type && (i = "completed", s.method = "throw", s.arg = l.arg)
                        }
                    }
                }

                function E(e, t) {
                    var s = t.method,
                        i = e.iterator[s];
                    if (void 0 === i) return t.delegate = null, "throw" === s && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== s && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + s + "' method")), u;
                    var r = p(i, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var a = r.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function S(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function M(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(S, this), this.reset(!0)
                }

                function P(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                r = function t() {
                                    for (; ++i < e.length;)
                                        if (s.call(e, i)) return t.value = e[i], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: R
                    }
                }

                function R() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return g.prototype = f, i(w, "constructor", {
                    value: f,
                    configurable: !0
                }), i(f, "constructor", {
                    value: g,
                    configurable: !0
                }), g.displayName = h(f, d, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, h(e, d, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function (e) {
                    return {
                        __await: e
                    }
                }, y(_.prototype), h(_.prototype, o, (function () {
                    return this
                })), e.AsyncIterator = _, e.async = function (t, s, i, r, a) {
                    void 0 === a && (a = Promise);
                    var n = new _(c(t, s, i, r), a);
                    return e.isGeneratorFunction(s) ? n : n.next().then((function (e) {
                        return e.done ? e.value : n.next()
                    }))
                }, y(w), h(w, d, "Generator"), h(w, a, (function () {
                    return this
                })), h(w, "toString", (function () {
                    return "[object Generator]"
                })), e.keys = function (e) {
                    var t = Object(e),
                        s = [];
                    for (var i in t) s.push(i);
                    return s.reverse(),
                        function e() {
                            for (; s.length;) {
                                var i = s.pop();
                                if (i in t) return e.value = i, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = P, M.prototype = {
                    constructor: M,
                    reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function i(s, i) {
                            return n.type = "throw", n.arg = e, t.next = s, i && (t.method = "next", t.arg = void 0), !!i
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r],
                                n = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var o = s.call(a, "catchLoc"),
                                    l = s.call(a, "finallyLoc");
                                if (o && l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (o) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var r = this.tryEntries[i];
                            if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var n = a ? a.completion : {};
                        return n.type = e, n.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(n)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), C(s), u
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var i = s.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    C(s)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (e, t, s) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function o(e, t, s, i, r, a, n) {
                try {
                    var o = e[a](n),
                        l = o.value
                } catch (e) {
                    return void s(e)
                }
                o.done ? t(l) : Promise.resolve(l).then(i, r)
            }

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            a = function () {
                "use strict";
                var e = function (e) {
                    return Array.prototype.slice.call(e)
                },
                    t = function () {
                        var e = window.navigator.userAgent,
                            t = !!e.match(/iPad/i) || !!e.match(/iPhone/i),
                            s = !!e.match(/WebKit/i);
                        return t && s && !e.match(/CriOS/i)
                    },
                    s = {
                        scale: 1.5,
                        speed: 1.5,
                        wrapperClass: null,
                        willChange: !1,
                        externalRAF: !1
                    },
                    i = function (e, t) {
                        var i, r, a = this;
                        if (this.element = e, this.wrapper = document.createElement("div"), this.options = Object.assign({}, s, t), this.updateOptions(), this.vh = document.documentElement.clientHeight, this.isVisible = !1, this.damp = this.calcDamp(document.documentElement.clientWidth), this.elementTagName = this.element.tagName.toLowerCase(), "img" === this.elementTagName) {
                            var l = this.element.getAttribute("src");
                            if (!l) return;
                            (i = n().mark((function e(t) {
                                var s;
                                return n().wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return (s = new Image).src = t, e.next = 4, s.decode();
                                        case 4:
                                            return e.abrupt("return", s);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), r = function () {
                                var e = this,
                                    t = arguments;
                                return new Promise((function (s, r) {
                                    var a = i.apply(e, t);

                                    function n(e) {
                                        o(a, s, r, n, l, "next", e)
                                    }

                                    function l(e) {
                                        o(a, s, r, n, l, "throw", e)
                                    }
                                    n(void 0)
                                }))
                            }, function (e) {
                                return r.apply(this, arguments)
                            })(l).then((function () {
                                a.createParallax()
                            }))
                        } else this.createParallax()
                    };
                i.prototype.createParallax = function () {
                    this.setStyle(!0), this.wrapElement(), t() || this.createObserver()
                }, i.prototype.updateOptions = function () {
                    var e = this.element.getAttribute("data-u-scale"),
                        t = this.element.getAttribute("data-u-speed"),
                        s = this.element.getAttribute("data-u-willchange");
                    null !== e && (this.options.scale = Number(e)), null !== t && (this.options.speed = Number(t)), null !== s && (this.options.willChange = !0)
                }, i.prototype.setStyle = function (e) {
                    void 0 === e && (e = !1);
                    var t = this.element.clientHeight,
                        s = this.element.clientWidth,
                        i = window.getComputedStyle(this.element),
                        r = "absolute" === i.position,
                        a = this.wrapper.style,
                        n = this.element.style;
                    this.overflow = Math.floor(10 * (t - t * this.options.scale)) / 10, r && "0px" !== i.marginRight && "0px" !== i.marginLeft && i.marginLeft === i.marginRight && (a.margin = "auto"), "0px" === i.marginTop && "0px" === i.marginBottom || (a.marginTop = i.marginTop, a.marginBottom = i.marginBottom, n.marginTop = "0", n.marginBottom = "0"), "auto" !== i.inset && (a.top = i.top, a.right = i.right, a.bottom = i.bottom, a.left = i.left, n.top = "0", n.right = "0", n.bottom = "0", n.left = "0"), "none" !== i.transform && (a.transform = i.transform), "auto" !== i.zIndex && (a.zIndex = i.zIndex), a.position = r ? "absolute" : "relative", "auto" !== i.gridArea && "auto / auto / auto / auto" !== i.gridArea && (a.gridArea = i.gridArea, n.gridArea = "auto"), e && (a.width = "100%", a.overflow = "hidden", n.display = "block", n.overflow = "hidden", n.backfaceVisibility = "hidden", "0px" !== i.padding && (n.padding = "0"), "img" === this.elementTagName ? n.objectFit = "cover" : "video" !== this.elementTagName && (n.backgroundPosition = "center")), "0px" !== i.borderRadius && (a.borderRadius = i.borderRadius, a.isolation || (a.isolation = "isolate"), "0px" !== i.marginLeft && (a.marginLeft = i.marginLeft, n.marginLeft = "0"), "0px" !== i.marginRight && (a.marginRight = i.marginRight, n.marginRight = "0"), a.width = s + "px"), r && (a.width = s + "px", n.width = "100%"), "none" !== i.maxHeight && (a.maxHeight = i.maxHeight, n.maxHeight = "none"), "0px" !== i.minHeight && (a.minHeight = i.minHeight, n.minHeight = "none"), n.width = s + "px", a.setProperty("height", t + "px", "important"), n.setProperty("height", t * this.options.scale + "px", "important"), this.wrapperHeight = t
                }, i.prototype.wrapElement = function () {
                    var e = this.element.getAttribute("data-u-wrapper-class") || this.options.wrapperClass;
                    e && this.wrapper.classList.add(e);
                    var t = this.element.closest("picture");
                    if (null !== t) null !== t.parentNode && t.parentNode.insertBefore(this.wrapper, t), this.wrapper.appendChild(t);
                    else {
                        var s = this.element.parentNode;
                        null !== s && s.insertBefore(this.wrapper, this.element), this.wrapper.appendChild(this.element)
                    }
                }, i.prototype.checkVisible = function () {
                    var e = this.wrapper.getBoundingClientRect();
                    0 < e.bottom && e.top < this.vh ? this.onEnter() : this.onLeave()
                }, i.prototype.createObserver = function () {
                    this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
                        root: null,
                        rootMargin: "0px",
                        threshold: 0
                    }), this.observer.observe(this.wrapper)
                }, i.prototype.handleIntersect = function (e) {
                    e[0].isIntersecting ? this.onEnter() : this.onLeave()
                }, i.prototype.onEnter = function () {
                    var e = this.element.style;
                    this.options.willChange && "transform" !== e.willChange && (e.willChange = "transform"), this.isVisible = !0
                }, i.prototype.onLeave = function () {
                    var e = this.element.style;
                    this.options.willChange && "transform" === e.willChange && (e.willChange = ""), this.isVisible = !1
                }, i.prototype.calcTranslateValue = function () {
                    var e = window.pageYOffset;
                    e < 0 && (e = 0);
                    var t = this.wrapper.getBoundingClientRect().top + e,
                        s = (e + this.vh - t) / ((this.vh + this.wrapperHeight) / 100),
                        i = Math.min(100, Math.max(0, s)) / 100,
                        r = (this.overflow * this.options.speed - this.overflow) / 2,
                        a = this.overflow * (1 - i) * this.options.speed * this.damp - r;
                    return Number(a.toFixed(4))
                }, i.prototype.calcDamp = function (e) {
                    var t = this.options.scale,
                        s = this.options.speed;
                    if ((s >= 1.4 || t >= 1.4) && e <= 1e3) {
                        t < 1 && (t = 1), s < 1 && (s = 1);
                        var i = 1.2 - (1 - (e / 1e3 + (3 - (t + s)))),
                            r = Math.max(.5, Math.min(1, i));
                        return Math.floor(100 * r) / 100
                    }
                    return 1
                }, i.prototype.transformParallax = function () {
                    this.element.style.transform = "translate3d(0 , " + this.calcTranslateValue() + "px , 0)"
                }, i.prototype.animate = function () {
                    t() && this.checkVisible(), window.pageYOffset < 0 || this.isVisible && this.transformParallax()
                }, i.prototype.reset = function () {
                    this.damp = this.calcDamp(window.innerWidth);
                    var e = this.wrapper.style,
                        t = this.element.style;
                    this.vh = document.documentElement.clientHeight, e.width = "", e.position = "", e.height = "100%", t.width = "", "img" === this.elementTagName && "absolute" === e.position && (e.height = "100%"), "" === e.gridArea ? t.height = "" : t.height = "100%", "0px" !== e.margin && (e.margin = "", t.margin = ""), "auto" !== e.inset && (e.top = "", e.right = "", e.bottom = "", e.left = "", t.top = "", t.right = "", t.bottom = "", t.left = ""), "none" !== e.transform && (e.transform = "", t.transform = ""), "auto" !== e.zIndex && (e.zIndex = ""), "0px" !== e.borderRadius && (e.borderRadius = "", e.isolation = ""), this.setStyle(), this.transformParallax()
                }, i.prototype.destroy = function () {
                    var e;
                    this.observer && this.observer.disconnect(), this.wrapper.removeAttribute("style"), this.element.removeAttribute("style"), (e = this.wrapper).replaceWith.apply(e, this.wrapper.childNodes)
                };
                var r = function (t, s) {
                    if (this.elements = [], !t) throw new Error("Argument 'elements' is null.");
                    var i, r;
                    this.elements = function (t) {
                        return Array.isArray(t) ? t : "string" == typeof t ? e(document.querySelectorAll(t)) : t instanceof HTMLElement ? [t] : t instanceof NodeList || t instanceof HTMLCollection ? e(t) : [t]
                    }(t), this.options = s, this.instances = [], this.externalRAF = !(!this.options || !this.options.externalRAF) && this.options.externalRAF, this.onResizeEvent = this.resize.bind(this), this.isInit = !1, i = "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]"), r = "undefined" != typeof Element && Element.prototype.closest, i && r && "IntersectionObserver" in window && this.init()
                };
                return r.prototype.init = function () {
                    var e = this;
                    this.isInit || (this.instances = this.elements.map((function (t) {
                        return new i(t, e.options)
                    })), this.externalRAF || this.animate(), this.addEventListeners(), this.isInit = !0)
                }, r.prototype.animate = function () {
                    this.instances.forEach((function (e) {
                        e.animate()
                    })), this.externalRAF || (this.requestId = window.requestAnimationFrame(this.animate.bind(this)))
                }, r.prototype.cancel = function () {
                    this.requestId && window.cancelAnimationFrame(this.requestId)
                }, r.prototype.reset = function () {
                    this.instances.forEach((function (e) {
                        e.reset()
                    }))
                }, r.prototype.resize = function () {
                    clearTimeout(this.timer), this.timer = window.setTimeout(this.reset.bind(this), 500), this.reset.bind(this)
                }, r.prototype.addEventListeners = function () {
                    navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/) ? window.addEventListener("orientationchange", this.onResizeEvent) : window.addEventListener("resize", this.onResizeEvent)
                }, r.prototype.destroy = function () {
                    this.cancel(), window.removeEventListener("resize", this.onResizeEvent), window.removeEventListener("orientationchange", this.onResizeEvent), this.instances.forEach((function (e) {
                        e.destroy()
                    })), this.isInit = !1
                }, r
            }, "object" == l(t) ? e.exports = a() : void 0 === (r = "function" == typeof (i = a) ? i.call(t, s, t, e) : i) || (e.exports = r)
        }
    },
        t = {};

    function s(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var a = t[i] = {
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, s), a.exports
    }
    s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }), t
    }, s.d = (e, t) => {
        for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        let e = 0;

        function t() {
            if (!(e > 100)) {
                if (100 === e) console.warn("Curtains: too many warnings thrown, stop logging.");
                else {
                    const e = Array.prototype.slice.call(arguments);
                    console.warn.apply(console, e)
                }
                e++
            }
        }

        function i() {
            const e = Array.prototype.slice.call(arguments);
            console.error.apply(console, e)
        }

        function r() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                let t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16).toUpperCase()
            }))
        }

        function a(e) {
            return 0 == (e & e - 1)
        }
        class n {
            constructor(e) {
                if (this.type = "Scene", e && "Renderer" === e.type) {
                    if (!e.gl) return void i(this.type + ": Renderer WebGL context is undefined", e)
                } else i(this.type + ": Renderer not passed as first argument", e);
                this.renderer = e, this.gl = e.gl, this.initStacks()
            }
            initStacks() {
                this.stacks = {
                    pingPong: [],
                    renderTargets: [],
                    opaque: [],
                    transparent: [],
                    renderPasses: [],
                    scenePasses: []
                }
            }
            resetPlaneStacks() {
                this.stacks.pingPong = [], this.stacks.renderTargets = [], this.stacks.opaque = [], this.stacks.transparent = [];
                for (let e = 0; e < this.renderer.planes.length; e++) this.addPlane(this.renderer.planes[e])
            }
            resetShaderPassStacks() {
                this.stacks.scenePasses = [], this.stacks.renderPasses = [];
                for (let e = 0; e < this.renderer.shaderPasses.length; e++) this.renderer.shaderPasses[e].index = e, this.renderer.shaderPasses[e]._isScenePass ? this.stacks.scenePasses.push(this.renderer.shaderPasses[e]) : this.stacks.renderPasses.push(this.renderer.shaderPasses[e]);
                0 === this.stacks.scenePasses.length && (this.renderer.state.scenePassIndex = null)
            }
            addToRenderTargetsStack(e) {
                const t = this.renderer.planes.filter((t => "PingPongPlane" !== t.type && t.target && t.uuid !== e.uuid));
                let s = -1;
                if (e.target._depth) {
                    for (let i = t.length - 1; i >= 0; i--)
                        if (t[i].target.uuid === e.target.uuid) {
                            s = i + 1;
                            break
                        }
                } else s = t.findIndex((t => t.target.uuid === e.target.uuid));
                s = Math.max(0, s), t.splice(s, 0, e), e.target._depth ? (t.sort(((e, t) => e.index - t.index)), t.sort(((e, t) => t.renderOrder - e.renderOrder))) : (t.sort(((e, t) => t.index - e.index)), t.sort(((e, t) => e.renderOrder - t.renderOrder))), t.sort(((e, t) => e.target.index - t.target.index)), this.stacks.renderTargets = t
            }
            addToRegularPlaneStack(e) {
                const t = this.renderer.planes.filter((t => "PingPongPlane" !== t.type && !t.target && t._transparent === e._transparent && t.uuid !== e.uuid));
                let s = -1;
                for (let i = t.length - 1; i >= 0; i--)
                    if (t[i]._geometry.definition.id === e._geometry.definition.id) {
                        s = i + 1;
                        break
                    } return s = Math.max(0, s), t.splice(s, 0, e), t.sort(((e, t) => e.index - t.index)), t
            }
            addPlane(e) {
                if ("PingPongPlane" === e.type) this.stacks.pingPong.push(e);
                else if (e.target) this.addToRenderTargetsStack(e);
                else if (e._transparent) {
                    const t = this.addToRegularPlaneStack(e);
                    t.sort(((e, t) => t.relativeTranslation.z - e.relativeTranslation.z)), t.sort(((e, t) => t.renderOrder - e.renderOrder)), this.stacks.transparent = t
                } else {
                    const t = this.addToRegularPlaneStack(e);
                    t.sort(((e, t) => t.renderOrder - e.renderOrder)), this.stacks.opaque = t
                }
            }
            removePlane(e) {
                "PingPongPlane" === e.type ? this.stacks.pingPong = this.stacks.pingPong.filter((t => t.uuid !== e.uuid)) : e.target ? this.stacks.renderTargets = this.stacks.renderTargets.filter((t => t.uuid !== e.uuid)) : e._transparent ? this.stacks.transparent = this.stacks.transparent.filter((t => t.uuid !== e.uuid)) : this.stacks.opaque = this.stacks.opaque.filter((t => t.uuid !== e.uuid))
            }
            setPlaneRenderOrder(e) {
                if ("ShaderPass" === e.type) this.sortShaderPassStack(e._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
                else if ("PingPongPlane" === e.type) return;
                if (e.target) e.target._depth ? (this.stacks.renderTargets.sort(((e, t) => e.index - t.index)), this.stacks.renderTargets.sort(((e, t) => t.renderOrder - e.renderOrder))) : (this.stacks.renderTargets.sort(((e, t) => t.index - e.index)), this.stacks.renderTargets.sort(((e, t) => e.renderOrder - t.renderOrder))), this.stacks.renderTargets.sort(((e, t) => e.target.index - t.target.index));
                else {
                    const t = e._transparent ? this.stacks.transparent : this.stacks.opaque,
                        s = this.stacks.scenePasses.find(((e, t) => e._isScenePass && !e._depth && 0 === t));
                    !this.renderer.depth || s ? (t.sort(((e, t) => t.index - e.index)), e._transparent && t.sort(((e, t) => e.relativeTranslation.z - t.relativeTranslation.z)), t.sort(((e, t) => e.renderOrder - t.renderOrder))) : (t.sort(((e, t) => e.index - t.index)), e._transparent && t.sort(((e, t) => t.relativeTranslation.z - e.relativeTranslation.z)), t.sort(((e, t) => t.renderOrder - e.renderOrder)))
                }
            }
            addShaderPass(e) {
                e._isScenePass ? (this.stacks.scenePasses.push(e), this.sortShaderPassStack(this.stacks.scenePasses)) : (this.stacks.renderPasses.push(e), this.sortShaderPassStack(this.stacks.renderPasses))
            }
            removeShaderPass(e) {
                this.resetShaderPassStacks()
            }
            sortShaderPassStack(e) {
                e.sort(((e, t) => e.index - t.index)), e.sort(((e, t) => e.renderOrder - t.renderOrder))
            }
            enableShaderPass() {
                this.stacks.scenePasses.length && 0 === this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target))
            }
            drawRenderPasses() {
                this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0, this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
                for (let e = 0; e < this.stacks.renderPasses.length; e++) this.stacks.renderPasses[e]._startDrawing(), this.renderer.clearDepth()
            }
            drawScenePasses() {
                for (let e = 0; e < this.stacks.scenePasses.length; e++) this.stacks.scenePasses[e]._startDrawing()
            }
            drawPingPongStack() {
                for (let e = 0; e < this.stacks.pingPong.length; e++) {
                    const t = this.stacks.pingPong[e];
                    t && t._startDrawing()
                }
            }
            drawStack(e) {
                for (let t = 0; t < this.stacks[e].length; t++) {
                    const s = this.stacks[e][t];
                    s && s._startDrawing()
                }
            }
            draw() {
                this.drawPingPongStack(), this.enableShaderPass(), this.drawStack("renderTargets"), this.drawRenderPasses(), this.renderer.setBlending(!1), this.drawStack("opaque"), this.stacks.transparent.length && (this.renderer.setBlending(!0), this.drawStack("transparent")), this.drawScenePasses()
            }
        }
        class o {
            constructor() {
                this.geometries = [], this.clear()
            }
            clear() {
                this.textures = [], this.programs = []
            }
            getGeometryFromID(e) {
                return this.geometries.find((t => t.id === e))
            }
            addGeometry(e, t, s) {
                this.geometries.push({
                    id: e,
                    vertices: t,
                    uvs: s
                })
            }
            isSameShader(e, t) {
                return 0 === e.localeCompare(t)
            }
            getProgramFromShaders(e, t) {
                return this.programs.find((s => this.isSameShader(s.vsCode, e) && this.isSameShader(s.fsCode, t)))
            }
            addProgram(e) {
                this.programs.push(e)
            }
            getTextureFromSource(e) {
                const t = "string" == typeof e ? e : e.src;
                return this.textures.find((e => e.source && e.source.src === t))
            }
            addTexture(e) {
                this.getTextureFromSource(e.source) || this.textures.push(e)
            }
            removeTexture(e) {
                this.textures = this.textures.filter((t => t.uuid !== e.uuid))
            }
        }
        class l {
            constructor() {
                this.clear()
            }
            clear() {
                this.queue = []
            }
            add(e, t = !1) {
                const s = {
                    callback: e,
                    keep: t,
                    timeout: null
                };
                return s.timeout = setTimeout((() => {
                    this.queue.push(s)
                }), 0), s
            }
            execute() {
                this.queue.map((e => {
                    e.callback && e.callback(), clearTimeout(this.queue.timeout)
                })), this.queue = this.queue.filter((e => e.keep))
            }
        }
        class d {
            constructor({
                alpha: e,
                antialias: s,
                premultipliedAlpha: i,
                depth: r,
                failIfMajorPerformanceCaveat: a,
                preserveDrawingBuffer: n,
                stencil: o,
                container: l,
                pixelRatio: d,
                renderingScale: h,
                production: c,
                onError: p,
                onSuccess: u,
                onContextLost: m,
                onContextRestored: g,
                onDisposed: f,
                onSceneChange: v
            }) {
                this.type = "Renderer", this.alpha = e, this.antialias = s, this.premultipliedAlpha = i, this.depth = r, this.failIfMajorPerformanceCaveat = a, this.preserveDrawingBuffer = n, this.stencil = o, this.container = l, this.pixelRatio = d, this._renderingScale = h, this.production = c, this.onError = p, this.onSuccess = u, this.onContextLost = m, this.onContextRestored = g, this.onDisposed = f, this.onSceneChange = v, this.initState(), this.canvas = document.createElement("canvas");
                const x = {
                    alpha: this.alpha,
                    premultipliedAlpha: this.premultipliedAlpha,
                    antialias: this.antialias,
                    depth: this.depth,
                    failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                    preserveDrawingBuffer: this.preserveDrawingBuffer,
                    stencil: this.stencil
                };
                if (this.gl = this.canvas.getContext("webgl2", x), this._isWebGL2 = !!this.gl, this.gl || (this.gl = this.canvas.getContext("webgl", x) || this.canvas.getContext("experimental-webgl", x)), !this.gl) return this.production || t(this.type + ": WebGL context could not be created"), this.state.isActive = !1, void (this.onError && this.onError());
                this.onSuccess && this.onSuccess(), this.initRenderer()
            }
            initState() {
                this.state = {
                    isActive: !0,
                    isContextLost: !0,
                    drawingEnabled: !0,
                    forceRender: !1,
                    currentProgramID: null,
                    currentGeometryID: null,
                    forceBufferUpdate: !1,
                    depthTest: null,
                    blending: null,
                    cullFace: null,
                    frameBufferID: null,
                    scenePassIndex: null,
                    activeTexture: null,
                    unpackAlignment: null,
                    flipY: null,
                    premultiplyAlpha: null
                }
            }
            initCallbackQueueManager() {
                this.nextRender = new l
            }
            initRenderer() {
                this.planes = [], this.renderTargets = [], this.shaderPasses = [], this.state.isContextLost = !1, this.state.maxTextureSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), this.initCallbackQueueManager(), this.setBlendFunc(), this.setDepthFunc(), this.setDepthTest(!0), this.cache = new o, this.scene = new n(this), this.getExtensions(), this._contextLostHandler = this.contextLost.bind(this), this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, !1), this._contextRestoredHandler = this.contextRestored.bind(this), this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, !1)
            }
            getExtensions() {
                this.extensions = [], this._isWebGL2 ? (this.extensions.EXT_color_buffer_float = this.gl.getExtension("EXT_color_buffer_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context")) : (this.extensions.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object"), this.extensions.OES_texture_float = this.gl.getExtension("OES_texture_float"), this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"), this.extensions.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float"), this.extensions.OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear"), this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"), this.extensions.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint"), this.extensions.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives"), this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB"), this.extensions.WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture"), this.extensions.WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers"), this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context"))
            }
            contextLost(e) {
                this.state.isContextLost = !0, this.state.isActive && (e.preventDefault(), this.nextRender.add((() => this.onContextLost && this.onContextLost())))
            }
            restoreContext() {
                this.state.isActive && (this.initState(), this.gl && this.extensions.WEBGL_lose_context ? this.extensions.WEBGL_lose_context.restoreContext() : (this.gl || this.production ? this.extensions.WEBGL_lose_context || this.production || t(this.type + ": Could not restore the context because the restore context extension is not defined") : t(this.type + ": Could not restore the context because the context is not defined"), this.onError && this.onError()))
            }
            isContextexFullyRestored() {
                let e = !0;
                for (let t = 0; t < this.renderTargets.length; t++) {
                    this.renderTargets[t].textures[0]._canDraw || (e = !1);
                    break
                }
                if (e)
                    for (let t = 0; t < this.planes.length; t++) {
                        if (!this.planes[t]._canDraw) {
                            e = !1;
                            break
                        }
                        for (let s = 0; s < this.planes[t].textures.length; s++)
                            if (!this.planes[t].textures[s]._canDraw) {
                                e = !1;
                                break
                            }
                    }
                if (e)
                    for (let t = 0; t < this.shaderPasses.length; t++) {
                        if (!this.shaderPasses[t]._canDraw) {
                            e = !1;
                            break
                        }
                        for (let s = 0; s < this.shaderPasses[t].textures.length; s++)
                            if (!this.shaderPasses[t].textures[s]._canDraw) {
                                e = !1;
                                break
                            }
                    }
                return e
            }
            contextRestored() {
                this.getExtensions(), this.setBlendFunc(), this.setDepthFunc(), this.setDepthTest(!0), this.cache.clear(), this.scene.initStacks();
                for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e]._restoreContext();
                for (let e = 0; e < this.planes.length; e++) this.planes[e]._restoreContext();
                for (let e = 0; e < this.shaderPasses.length; e++) this.shaderPasses[e]._restoreContext();
                const e = this.nextRender.add((() => {
                    this.isContextexFullyRestored() && (e.keep = !1, this.state.isContextLost = !1, this.onContextRestored && this.onContextRestored(), this.onSceneChange(), this.needRender())
                }), !0)
            }
            setPixelRatio(e) {
                this.pixelRatio = e
            }
            setSize() {
                if (!this.gl) return;
                const e = this.container.getBoundingClientRect();
                this._boundingRect = {
                    width: e.width * this.pixelRatio,
                    height: e.height * this.pixelRatio,
                    top: e.top * this.pixelRatio,
                    left: e.left * this.pixelRatio
                };
                const t = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
                    s = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                if (t && s) {
                    function i(e) {
                        let t = 0;
                        for (; e && !isNaN(e.offsetTop);) t += e.offsetTop - e.scrollTop, e = e.offsetParent;
                        return t
                    }
                    this._boundingRect.top = i(this.container) * this.pixelRatio
                }
                this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px", this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px", this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale), this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)
            }
            resize() {
                for (let e = 0; e < this.planes.length; e++) this.planes[e]._canDraw && this.planes[e].resize();
                for (let e = 0; e < this.shaderPasses.length; e++) this.shaderPasses[e]._canDraw && this.shaderPasses[e].resize();
                for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e].resize();
                this.needRender()
            }
            clear() {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
            }
            clearDepth() {
                this.gl.clear(this.gl.DEPTH_BUFFER_BIT)
            }
            clearColor() {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT)
            }
            bindFrameBuffer(e, t) {
                let s = null;
                e ? (s = e.index, s !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer), this.gl.viewport(0, 0, e._size.width, e._size.height), e._shouldClear && !t && this.clear())) : null !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)), this.state.frameBufferID = s
            }
            setDepthTest(e) {
                e && !this.state.depthTest ? (this.state.depthTest = e, this.gl.enable(this.gl.DEPTH_TEST)) : !e && this.state.depthTest && (this.state.depthTest = e, this.gl.disable(this.gl.DEPTH_TEST))
            }
            setDepthFunc() {
                this.gl.depthFunc(this.gl.LEQUAL)
            }
            setBlending(e = !1) {
                e && !this.state.blending ? (this.state.blending = e, this.gl.enable(this.gl.BLEND)) : !e && this.state.blending && (this.state.blending = e, this.gl.disable(this.gl.BLEND))
            }
            setBlendFunc() {
                this.gl.enable(this.gl.BLEND), this.premultipliedAlpha ? this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
            }
            setFaceCulling(e) {
                if (this.state.cullFace !== e)
                    if (this.state.cullFace = e, "none" === e) this.gl.disable(this.gl.CULL_FACE);
                    else {
                        const t = "front" === e ? this.gl.FRONT : this.gl.BACK;
                        this.gl.enable(this.gl.CULL_FACE), this.gl.cullFace(t)
                    }
            }
            useProgram(e) {
                null !== this.state.currentProgramID && this.state.currentProgramID === e.id || (this.gl.useProgram(e.program), this.state.currentProgramID = e.id)
            }
            removePlane(e) {
                this.gl && (this.planes = this.planes.filter((t => t.uuid !== e.uuid)), this.scene.removePlane(e), e = null, this.gl && this.clear(), this.onSceneChange())
            }
            removeRenderTarget(e) {
                if (!this.gl) return;
                let t = this.planes.find((t => "PingPongPlane" !== t.type && t.target && t.target.uuid === e.uuid));
                for (let t = 0; t < this.planes.length; t++) this.planes[t].target && this.planes[t].target.uuid === e.uuid && (this.planes[t].target = null);
                this.renderTargets = this.renderTargets.filter((t => t.uuid !== e.uuid));
                for (let e = 0; e < this.renderTargets.length; e++) this.renderTargets[e].index = e;
                e = null, this.gl && this.clear(), t && this.scene.resetPlaneStacks(), this.onSceneChange()
            }
            removeShaderPass(e) {
                this.gl && (this.shaderPasses = this.shaderPasses.filter((t => t.uuid !== e.uuid)), this.scene.removeShaderPass(e), e = null, this.gl && this.clear(), this.onSceneChange())
            }
            enableDrawing() {
                this.state.drawingEnabled = !0
            }
            disableDrawing() {
                this.state.drawingEnabled = !1
            }
            needRender() {
                this.state.forceRender = !0
            }
            render() {
                this.gl && (this.clear(), this.state.currentGeometryID = null, this.scene.draw())
            }
            deletePrograms() {
                for (let e = 0; e < this.cache.programs.length; e++) {
                    const t = this.cache.programs[e];
                    this.gl.deleteProgram(t.program)
                }
            }
            dispose() {
                if (!this.gl) return;
                for (this.state.isActive = !1; this.planes.length > 0;) this.removePlane(this.planes[0]);
                for (; this.shaderPasses.length > 0;) this.removeShaderPass(this.shaderPasses[0]);
                for (; this.renderTargets.length > 0;) this.removeRenderTarget(this.renderTargets[0]);
                let e = this.nextRender.add((() => {
                    0 === this.planes.length && 0 === this.shaderPasses.length && 0 === this.renderTargets.length && (e.keep = !1, this.deletePrograms(), this.clear(), this.canvas.removeEventListener("webgllost", this._contextLostHandler, !1), this.canvas.removeEventListener("webglrestored", this._contextRestoredHandler, !1), this.gl && this.extensions.WEBGL_lose_context && this.extensions.WEBGL_lose_context.loseContext(), this.canvas.width = this.canvas.width, this.gl = null, this.container.removeChild(this.canvas), this.container = null, this.canvas = null, this.onDisposed && this.onDisposed())
                }), !0)
            }
        }
        // 스크롤
        class h {
            constructor({
                xOffset: e = 0,
                yOffset: t = 0,
                lastXDelta: s = 0,
                lastYDelta: i = 0,
                shouldWatch: r = !0,
                onScroll: a = (() => { })
            } = {}) {
                this.xOffset = e, this.yOffset = t, this.lastXDelta = s, this.lastYDelta = i, this.shouldWatch = r, this.onScroll = a, this.handler = this.scroll.bind(this, !0), this.shouldWatch && window.addEventListener("scroll", this.handler, {
                    passive: !0
                })
            }
            scroll() {
                this.updateScrollValues(window.pageXOffset, window.pageYOffset)
            }
            updateScrollValues(e, t) {
                const s = this.xOffset;
                this.xOffset = e, this.lastXDelta = s - this.xOffset;
                const i = this.yOffset;
                this.yOffset = t, this.lastYDelta = i - this.yOffset, this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta)
            }
            dispose() {
                this.shouldWatch && window.removeEventListener("scroll", this.handler, {
                    passive: !0
                })
            }
        }
        class c {
            constructor({
                container: e,
                alpha: s = !0,
                premultipliedAlpha: i = !1,
                antialias: r = !0,
                depth: a = !0,
                failIfMajorPerformanceCaveat: n = !0,
                preserveDrawingBuffer: o = !1,
                stencil: l = !1,
                autoResize: d = !0,
                autoRender: h = !0,
                watchScroll: c = !0,
                pixelRatio: p = window.devicePixelRatio || 1,
                renderingScale: u = 1,
                production: m = !1
            } = {}) {
                this.type = "Curtains", this._autoResize = d, this._autoRender = h, this._watchScroll = c, this.pixelRatio = p, u = isNaN(u) ? 1 : parseFloat(u), this._renderingScale = Math.max(.25, Math.min(1, u)), this.premultipliedAlpha = i, this.alpha = s, this.antialias = r, this.depth = a, this.failIfMajorPerformanceCaveat = n, this.preserveDrawingBuffer = o, this.stencil = l, this.production = m, this.errors = !1, e ? this.setContainer(e) : this.production || t(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context")
            }
            setContainer(e) {
                if (e)
                    if ("string" == typeof e)
                        if (e = document.getElementById(e)) this.container = e;
                        else {
                            let e = document.createElement("div");
                            e.setAttribute("id", "curtains-canvas"), document.body.appendChild(e), this.container = e, this.production || t('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
                        }
                    else e instanceof Element && (this.container = e);
                else {
                    let e = document.createElement("div");
                    e.setAttribute("id", "curtains-canvas"), document.body.appendChild(e), this.container = e, this.production || t('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
                }
                this._initCurtains()
            }
            _initCurtains() {
                this.planes = [], this.renderTargets = [], this.shaderPasses = [], this._initRenderer(), this.gl && (this._initScroll(), this._setSize(), this._addListeners(), this.container.appendChild(this.canvas), console.log("curtains.js - v8.1.5"), this._animationFrameID = null, this._autoRender && this._animate())
            }
            _initRenderer() {
                this.renderer = new d({
                    alpha: this.alpha,
                    antialias: this.antialias,
                    premultipliedAlpha: this.premultipliedAlpha,
                    depth: this.depth,
                    failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                    preserveDrawingBuffer: this.preserveDrawingBuffer,
                    stencil: this.stencil,
                    container: this.container,
                    pixelRatio: this.pixelRatio,
                    renderingScale: this._renderingScale,
                    production: this.production,
                    onError: () => this._onRendererError(),
                    onSuccess: () => this._onRendererSuccess(),
                    onContextLost: () => this._onRendererContextLost(),
                    onContextRestored: () => this._onRendererContextRestored(),
                    onDisposed: () => this._onRendererDisposed(),
                    onSceneChange: () => this._keepSync()
                }), this.gl = this.renderer.gl, this.canvas = this.renderer.canvas
            }
            restoreContext() {
                this.renderer.restoreContext()
            }
            _animate() {
                this.render(), this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this))
            }
            enableDrawing() {
                this.renderer.enableDrawing()
            }
            disableDrawing() {
                this.renderer.disableDrawing()
            }
            needRender() {
                this.renderer.needRender()
            }
            nextRender(e, t = !1) {
                return this.renderer.nextRender.add(e, t)
            }
            clear() {
                this.renderer && this.renderer.clear()
            }
            clearDepth() {
                this.renderer && this.renderer.clearDepth()
            }
            clearColor() {
                this.renderer && this.renderer.clearColor()
            }
            isWebGL2() {
                return !!this.gl && this.renderer._isWebGL2
            }
            render() {
                this.renderer.nextRender.execute(), (this.renderer.state.drawingEnabled || this.renderer.state.forceRender) && (this.renderer.state.forceRender && (this.renderer.state.forceRender = !1), this._onRenderCallback && this._onRenderCallback(), this.renderer.render())
            }
            _addListeners() {
                this._resizeHandler = null, this._autoResize && (this._resizeHandler = this.resize.bind(this, !0), window.addEventListener("resize", this._resizeHandler, !1))
            }
            setPixelRatio(e, t) {
                this.pixelRatio = parseFloat(Math.max(e, 1)) || 1, this.renderer.setPixelRatio(e), this.resize(t)
            }
            _setSize() {
                this.renderer.setSize(), this._scrollManager.shouldWatch && (this._scrollManager.xOffset = window.pageXOffset, this._scrollManager.yOffset = window.pageYOffset)
            }
            getBoundingRect() {
                return this.renderer._boundingRect
            }
            resize(e) {
                this.gl && (this._setSize(), this.renderer.resize(), this.nextRender((() => {
                    this._onAfterResizeCallback && e && this._onAfterResizeCallback()
                })))
            }
            _initScroll() {
                this._scrollManager = new h({
                    xOffset: window.pageXOffset,
                    yOffset: window.pageYOffset,
                    lastXDelta: 0,
                    lastYDelta: 0,
                    shouldWatch: this._watchScroll,
                    onScroll: (e, t) => this._updateScroll(e, t)
                })
            }
            _updateScroll(e, t) {
                for (let s = 0; s < this.planes.length; s++) this.planes[s].watchScroll && this.planes[s].updateScrollPosition(e, t);
                this.renderer.needRender(), this._onScrollCallback && this._onScrollCallback()
            }
            updateScrollValues(e, t) {
                this._scrollManager.updateScrollValues(e, t)
            }
            getScrollDeltas() {
                return {
                    x: this._scrollManager.lastXDelta,
                    y: this._scrollManager.lastYDelta
                }
            }
            getScrollValues() {
                return {
                    x: this._scrollManager.xOffset,
                    y: this._scrollManager.yOffset
                }
            }
            _keepSync() {
                this.planes = this.renderer.planes, this.shaderPasses = this.renderer.shaderPasses, this.renderTargets = this.renderer.renderTargets
            }
            lerp(e, t, s) {
                return function (e, t, s) {
                    return (1 - s) * e + s * t
                }(e, t, s)
            }
            onAfterResize(e) {
                return e && (this._onAfterResizeCallback = e), this
            }
            onError(e) {
                return e && (this._onErrorCallback = e), this
            }
            _onRendererError() {
                setTimeout((() => {
                    this._onErrorCallback && !this.errors && this._onErrorCallback(), this.errors = !0
                }), 0)
            }
            onSuccess(e) {
                return e && (this._onSuccessCallback = e), this
            }
            _onRendererSuccess() {
                setTimeout((() => {
                    this._onSuccessCallback && this._onSuccessCallback()
                }), 0)
            }
            onContextLost(e) {
                return e && (this._onContextLostCallback = e), this
            }
            _onRendererContextLost() {
                this._onContextLostCallback && this._onContextLostCallback()
            }
            onContextRestored(e) {
                return e && (this._onContextRestoredCallback = e), this
            }
            _onRendererContextRestored() {
                this._onContextRestoredCallback && this._onContextRestoredCallback()
            }
            onRender(e) {
                return e && (this._onRenderCallback = e), this
            }
            onScroll(e) {
                return e && (this._onScrollCallback = e), this
            }
            dispose() {
                this.renderer.dispose()
            }
            _onRendererDisposed() {
                this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID), this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, !1), this._scrollManager && this._scrollManager.dispose()
            }
        }
        class p {
            constructor(e, t, s) {
                if (this.type = "Uniforms", e && "Renderer" === e.type) {
                    if (!e.gl) return void i(this.type + ": Renderer WebGL context is undefined", e)
                } else i(this.type + ": Renderer not passed as first argument", e);
                if (this.renderer = e, this.gl = e.gl, this.program = t, this.uniforms = {}, s)
                    for (const e in s) {
                        const t = s[e];
                        this.uniforms[e] = {
                            name: t.name,
                            type: t.type,
                            value: t.value.clone && "function" == typeof t.value.clone ? t.value.clone() : t.value,
                            update: null
                        }
                    }
            }
            handleUniformSetting(e) {
                switch (e.type) {
                    case "1i":
                        e.update = this.setUniform1i.bind(this);
                        break;
                    case "1iv":
                        e.update = this.setUniform1iv.bind(this);
                        break;
                    case "1f":
                        e.update = this.setUniform1f.bind(this);
                        break;
                    case "1fv":
                        e.update = this.setUniform1fv.bind(this);
                        break;
                    case "2i":
                        e.update = this.setUniform2i.bind(this);
                        break;
                    case "2iv":
                        e.update = this.setUniform2iv.bind(this);
                        break;
                    case "2f":
                        e.update = this.setUniform2f.bind(this);
                        break;
                    case "2fv":
                        e.update = this.setUniform2fv.bind(this);
                        break;
                    case "3i":
                        e.update = this.setUniform3i.bind(this);
                        break;
                    case "3iv":
                        e.update = this.setUniform3iv.bind(this);
                        break;
                    case "3f":
                        e.update = this.setUniform3f.bind(this);
                        break;
                    case "3fv":
                        e.update = this.setUniform3fv.bind(this);
                        break;
                    case "4i":
                        e.update = this.setUniform4i.bind(this);
                        break;
                    case "4iv":
                        e.update = this.setUniform4iv.bind(this);
                        break;
                    case "4f":
                        e.update = this.setUniform4f.bind(this);
                        break;
                    case "4fv":
                        e.update = this.setUniform4fv.bind(this);
                        break;
                    case "mat2":
                        e.update = this.setUniformMatrix2fv.bind(this);
                        break;
                    case "mat3":
                        e.update = this.setUniformMatrix3fv.bind(this);
                        break;
                    case "mat4":
                        e.update = this.setUniformMatrix4fv.bind(this);
                        break;
                    default:
                        this.renderer.production || t(this.type + ": This uniform type is not handled : ", e.type)
                }
            }
            setInternalFormat(e) {
                "Vec2" === e.value.type ? (e._internalFormat = "Vec2", e.lastValue = e.value.clone()) : "Vec3" === e.value.type ? (e._internalFormat = "Vec3", e.lastValue = e.value.clone()) : "Mat4" === e.value.type ? (e._internalFormat = "Mat4", e.lastValue = e.value.clone()) : "Quat" === e.value.type ? (e._internalFormat = "Quat", e.lastValue = e.value.clone()) : Array.isArray(e.value) ? (e._internalFormat = "array", e.lastValue = Array.from(e.value)) : e.value.constructor === Float32Array ? (e._internalFormat = "mat", e.lastValue = e.value) : (e._internalFormat = "float", e.lastValue = e.value)
            }
            setUniforms() {
                if (this.uniforms)
                    for (const e in this.uniforms) {
                        let s = this.uniforms[e];
                        s.location = this.gl.getUniformLocation(this.program, s.name), s._internalFormat || this.setInternalFormat(s), s.type || ("Vec2" === s._internalFormat ? s.type = "2f" : "Vec3" === s._internalFormat ? s.type = "3f" : "Mat4" === s._internalFormat ? s.type = "mat4" : "array" === s._internalFormat ? 4 === s.value.length ? (s.type = "4f", this.renderer.production || t(this.type + ": No uniform type declared for " + s.name + ", applied a 4f (array of 4 floats) uniform type")) : 3 === s.value.length ? (s.type = "3f", this.renderer.production || t(this.type + ": No uniform type declared for " + s.name + ", applied a 3f (array of 3 floats) uniform type")) : 2 === s.value.length && (s.type = "2f", this.renderer.production || t(this.type + ": No uniform type declared for " + s.name + ", applied a 2f (array of 2 floats) uniform type")) : "mat" === s._internalFormat ? 16 === s.value.length ? (s.type = "mat4", this.renderer.production || t(this.type + ": No uniform type declared for " + s.name + ", applied a mat4 (4x4 matrix array) uniform type")) : 9 === s.value.length ? (s.type = "mat3", this.renderer.production || t(this.type + ": No uniform type declared for " + s.name + ", applied a mat3 (3x3 matrix array) uniform type")) : 4 === s.value.length && (s.type = "mat2", this.renderer.production || t(this.type + ": No uniform type declared for " + s.name + ", applied a mat2 (2x2 matrix array) uniform type")) : (s.type = "1f", this.renderer.production || t(this.type + ": No uniform type declared for " + s.name + ", applied a 1f (float) uniform type"))), this.handleUniformSetting(s), s.update && s.update(s)
                    }
            }
            updateUniforms() {
                if (this.uniforms)
                    for (const e in this.uniforms) {
                        const t = this.uniforms[e];
                        let s = !1;
                        "Vec2" === t._internalFormat || "Vec3" === t._internalFormat || "Quat" === t._internalFormat ? t.value.equals(t.lastValue) || (s = !0, t.lastValue.copy(t.value)) : t.value.length ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) && (s = !0, t.lastValue = Array.from(t.value)) : t.value !== t.lastValue && (s = !0, t.lastValue = t.value), s && t.update && t.update(t)
                    }
            }
            setUniform1i(e) {
                this.gl.uniform1i(e.location, e.value)
            }
            setUniform1iv(e) {
                this.gl.uniform1iv(e.location, e.value)
            }
            setUniform1f(e) {
                this.gl.uniform1f(e.location, e.value)
            }
            setUniform1fv(e) {
                this.gl.uniform1fv(e.location, e.value)
            }
            setUniform2i(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2i(e.location, e.value.x, e.value.y) : this.gl.uniform2i(e.location, e.value[0], e.value[1])
            }
            setUniform2iv(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2iv(e.location, e.value)
            }
            setUniform2f(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2f(e.location, e.value.x, e.value.y) : this.gl.uniform2f(e.location, e.value[0], e.value[1])
            }
            setUniform2fv(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2fv(e.location, e.value)
            }
            setUniform3i(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3i(e.location, e.value[0], e.value[1], e.value[2])
            }
            setUniform3iv(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3iv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3iv(e.location, e.value)
            }
            setUniform3f(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3f(e.location, e.value[0], e.value[1], e.value[2])
            }
            setUniform3fv(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3fv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3fv(e.location, e.value)
            }
            setUniform4i(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4i(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4i(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
            }
            setUniform4iv(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4iv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4iv(e.location, e.value)
            }
            setUniform4f(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4f(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4f(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
            }
            setUniform4fv(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4fv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4fv(e.location, e.value)
            }
            setUniformMatrix2fv(e) {
                this.gl.uniformMatrix2fv(e.location, !1, e.value)
            }
            setUniformMatrix3fv(e) {
                this.gl.uniformMatrix3fv(e.location, !1, e.value)
            }
            setUniformMatrix4fv(e) {
                "Mat4" === e._internalFormat ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements) : this.gl.uniformMatrix4fv(e.location, !1, e.value)
            }
        }
        const u = "\nprecision mediump float;\n".replace(/\n/g, ""),
            m = "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n".replace(/\n/g, ""),
            g = "\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n".replace(/\n/g, ""),
            f = (u + m + g + "\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n").replace(/\n/g, ""),
            v = (u + g + "\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n").replace(/\n/g, ""),
            x = (u + m + g + "\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = vec4(aVertexPosition, 1.0);\n}\n").replace(/\n/g, ""),
            b = (u + g + "\nuniform sampler2D uRenderTexture;\n\nvoid main() {\n    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);\n}\n").replace(/\n/g, "");
        let w = 0;
        class y {
            constructor(e, {
                parent: s,
                vertexShader: r,
                fragmentShader: a
            } = {}) {
                if (this.type = "Program", e && "Renderer" === e.type) {
                    if (!e.gl) return void i(this.type + ": Renderer WebGL context is undefined", e)
                } else i(this.type + ": Renderer not passed as first argument", e);
                this.renderer = e, this.gl = this.renderer.gl, this.parent = s, this.defaultVsCode = "Plane" === this.parent.type ? f : x, this.defaultFsCode = "Plane" === this.parent.type ? v : b, r ? this.vsCode = r : (this.renderer.production || "Plane" !== this.parent.type || t(this.parent.type + ": No vertex shader provided, will use a default one"), this.vsCode = this.defaultVsCode), a ? this.fsCode = a : (this.renderer.production || t(this.parent.type + ": No fragment shader provided, will use a default one"), this.fsCode = this.defaultFsCode), this.compiled = !0, this.setupProgram()
            }
            createShader(e, s) {
                const r = this.gl.createShader(s);
                if (this.gl.shaderSource(r, e), this.gl.compileShader(r), !this.renderer.production && !this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS)) {
                    const e = s === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader";
                    let a = this.gl.getShaderSource(r).split("\n");
                    for (let e = 0; e < a.length; e++) a[e] = e + 1 + ": " + a[e];
                    return a = a.join("\n"), t(this.type + ": Errors occurred while compiling the", e, ":\n", this.gl.getShaderInfoLog(r)), i(a), t(this.type + ": Will use a default", e), this.createShader(s === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, s)
                }
                return r
            }
            useNewShaders() {
                this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER), this.vertexShader && this.fragmentShader || this.renderer.production || t(this.type + ": Unable to find or compile the vertex or fragment shader")
            }
            setupProgram() {
                let e = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode);
                e ? (this.vertexShader = e.vertexShader, this.fragmentShader = e.fragmentShader, this.activeUniforms = e.activeUniforms, this.activeAttributes = e.activeAttributes, this.createProgram()) : (this.useNewShaders(), this.compiled && (this.createProgram(), this.renderer.cache.addProgram(this)))
            }
            createProgram() {
                if (w++, this.id = w, this.program = this.gl.createProgram(), this.gl.attachShader(this.program, this.vertexShader), this.gl.attachShader(this.program, this.fragmentShader), this.gl.linkProgram(this.program), !this.renderer.production && !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) return t(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)), t(this.type + ": Will use default vertex and fragment shaders"), this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER), this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER), void this.createProgram();
                if (this.gl.deleteShader(this.vertexShader), this.gl.deleteShader(this.fragmentShader), !this.activeUniforms || !this.activeAttributes) {
                    this.activeUniforms = {
                        textures: [],
                        textureMatrices: []
                    };
                    const e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
                    for (let t = 0; t < e; t++) {
                        const e = this.gl.getActiveUniform(this.program, t);
                        e.type === this.gl.SAMPLER_2D && this.activeUniforms.textures.push(e.name), e.type === this.gl.FLOAT_MAT4 && "uMVMatrix" !== e.name && "uPMatrix" !== e.name && this.activeUniforms.textureMatrices.push(e.name)
                    }
                    this.activeAttributes = [];
                    const t = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
                    for (let e = 0; e < t; e++) {
                        const t = this.gl.getActiveAttrib(this.program, e);
                        this.activeAttributes.push(t.name)
                    }
                }
            }
            createUniforms(e) {
                this.uniformsManager = new p(this.renderer, this.program, e), this.setUniforms()
            }
            setUniforms() {
                this.renderer.useProgram(this), this.uniformsManager.setUniforms()
            }
            updateUniforms() {
                this.renderer.useProgram(this), this.uniformsManager.updateUniforms()
            }
        }
        class _ {
            constructor(e, {
                program: t = null,
                width: s = 1,
                height: r = 1
            } = {}) {
                if (this.type = "Geometry", e && "Renderer" === e.type) {
                    if (!e.gl) return void i(this.type + ": Renderer WebGL context is undefined", e)
                } else i(this.type + ": Renderer not passed as first argument", e);
                this.renderer = e, this.gl = this.renderer.gl, this.definition = {
                    id: s * r + s,
                    width: s,
                    height: r
                }, this.setDefaultAttributes(), this.setVerticesUVs()
            }
            restoreContext(e) {
                this.program = null, this.setDefaultAttributes(), this.setVerticesUVs(), this.setProgram(e)
            }
            setDefaultAttributes() {
                this.attributes = {
                    vertexPosition: {
                        name: "aVertexPosition",
                        size: 3,
                        isActive: !1
                    },
                    textureCoord: {
                        name: "aTextureCoord",
                        size: 3,
                        isActive: !1
                    }
                }
            }
            setVerticesUVs() {
                const e = this.renderer.cache.getGeometryFromID(this.definition.id);
                e ? (this.attributes.vertexPosition.array = e.vertices, this.attributes.textureCoord.array = e.uvs) : (this.computeVerticesUVs(), this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array))
            }
            setProgram(e) {
                this.program = e, this.initAttributes(), this.renderer._isWebGL2 ? (this._vao = this.gl.createVertexArray(), this.gl.bindVertexArray(this._vao)) : this.renderer.extensions.OES_vertex_array_object && (this._vao = this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(), this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)), this.initializeBuffers()
            }
            initAttributes() {
                for (const e in this.attributes) {
                    if (this.attributes[e].isActive = this.program.activeAttributes.includes(this.attributes[e].name), !this.attributes[e].isActive) return;
                    this.attributes[e].location = this.gl.getAttribLocation(this.program.program, this.attributes[e].name), this.attributes[e].buffer = this.gl.createBuffer(), this.attributes[e].numberOfItems = this.definition.width * this.definition.height * this.attributes[e].size * 2
                }
            }
            computeVerticesUVs() {
                this.attributes.vertexPosition.array = [], this.attributes.textureCoord.array = [];
                const e = this.attributes.vertexPosition.array,
                    t = this.attributes.textureCoord.array;
                for (let s = 0; s < this.definition.height; s++) {
                    const i = s / this.definition.height;
                    for (let s = 0; s < this.definition.width; s++) {
                        const r = s / this.definition.width;
                        t.push(r), t.push(i), t.push(0), e.push(2 * (r - .5)), e.push(2 * (i - .5)), e.push(0), t.push(r + 1 / this.definition.width), t.push(i), t.push(0), e.push(2 * (r + 1 / this.definition.width - .5)), e.push(2 * (i - .5)), e.push(0), t.push(r), t.push(i + 1 / this.definition.height), t.push(0), e.push(2 * (r - .5)), e.push(2 * (i + 1 / this.definition.height - .5)), e.push(0), t.push(r), t.push(i + 1 / this.definition.height), t.push(0), e.push(2 * (r - .5)), e.push(2 * (i + 1 / this.definition.height - .5)), e.push(0), t.push(r + 1 / this.definition.width), t.push(i), t.push(0), e.push(2 * (r + 1 / this.definition.width - .5)), e.push(2 * (i - .5)), e.push(0), t.push(r + 1 / this.definition.width), t.push(i + 1 / this.definition.height), t.push(0), e.push(2 * (r + 1 / this.definition.width - .5)), e.push(2 * (i + 1 / this.definition.height - .5)), e.push(0)
                    }
                }
            }
            initializeBuffers() {
                if (this.attributes) {
                    for (const e in this.attributes) {
                        if (!this.attributes[e].isActive) return;
                        this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[e].array), this.gl.STATIC_DRAW), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
                    }
                    this.renderer.state.currentGeometryID = this.definition.id
                }
            }
            bindBuffers() {
                if (this._vao) this.renderer._isWebGL2 ? this.gl.bindVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);
                else
                    for (const e in this.attributes) {
                        if (!this.attributes[e].isActive) return;
                        this.gl.enableVertexAttribArray(this.attributes[e].location), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
                    }
                this.renderer.state.currentGeometryID = this.definition.id
            }
            draw() {
                this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems)
            }
            dispose() {
                this._vao && (this.renderer._isWebGL2 ? this.gl.deleteVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao));
                for (const e in this.attributes) {
                    if (!this.attributes[e].isActive) return;
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW), this.gl.deleteBuffer(this.attributes[e].buffer)
                }
                this.attributes = null, this.renderer.state.currentGeometryID = null
            }
        }
        class T {
            constructor(e = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) {
                this.type = "Mat4", this.elements = e
            }
            setFromArray(e) {
                for (let t = 0; t < this.elements.length; t++) this.elements[t] = e[t];
                return this
            }
            copy(e) {
                const t = e.elements;
                return this.elements[0] = t[0], this.elements[1] = t[1], this.elements[2] = t[2], this.elements[3] = t[3], this.elements[4] = t[4], this.elements[5] = t[5], this.elements[6] = t[6], this.elements[7] = t[7], this.elements[8] = t[8], this.elements[9] = t[9], this.elements[10] = t[10], this.elements[11] = t[11], this.elements[12] = t[12], this.elements[13] = t[13], this.elements[14] = t[14], this.elements[15] = t[15], this
            }
            clone() {
                return (new T).copy(this)
            }
            multiply(e) {
                const t = this.elements,
                    s = e.elements;
                let i = new T;
                return i.elements[0] = s[0] * t[0] + s[1] * t[4] + s[2] * t[8] + s[3] * t[12], i.elements[1] = s[0] * t[1] + s[1] * t[5] + s[2] * t[9] + s[3] * t[13], i.elements[2] = s[0] * t[2] + s[1] * t[6] + s[2] * t[10] + s[3] * t[14], i.elements[3] = s[0] * t[3] + s[1] * t[7] + s[2] * t[11] + s[3] * t[15], i.elements[4] = s[4] * t[0] + s[5] * t[4] + s[6] * t[8] + s[7] * t[12], i.elements[5] = s[4] * t[1] + s[5] * t[5] + s[6] * t[9] + s[7] * t[13], i.elements[6] = s[4] * t[2] + s[5] * t[6] + s[6] * t[10] + s[7] * t[14], i.elements[7] = s[4] * t[3] + s[5] * t[7] + s[6] * t[11] + s[7] * t[15], i.elements[8] = s[8] * t[0] + s[9] * t[4] + s[10] * t[8] + s[11] * t[12], i.elements[9] = s[8] * t[1] + s[9] * t[5] + s[10] * t[9] + s[11] * t[13], i.elements[10] = s[8] * t[2] + s[9] * t[6] + s[10] * t[10] + s[11] * t[14], i.elements[11] = s[8] * t[3] + s[9] * t[7] + s[10] * t[11] + s[11] * t[15], i.elements[12] = s[12] * t[0] + s[13] * t[4] + s[14] * t[8] + s[15] * t[12], i.elements[13] = s[12] * t[1] + s[13] * t[5] + s[14] * t[9] + s[15] * t[13], i.elements[14] = s[12] * t[2] + s[13] * t[6] + s[14] * t[10] + s[15] * t[14], i.elements[15] = s[12] * t[3] + s[13] * t[7] + s[14] * t[11] + s[15] * t[15], i
            }
            getInverse() {
                const e = this.elements,
                    t = new T,
                    s = t.elements;
                let i = e[0],
                    r = e[1],
                    a = e[2],
                    n = e[3],
                    o = e[4],
                    l = e[5],
                    d = e[6],
                    h = e[7],
                    c = e[8],
                    p = e[9],
                    u = e[10],
                    m = e[11],
                    g = e[12],
                    f = e[13],
                    v = e[14],
                    x = e[15],
                    b = i * l - r * o,
                    w = i * d - a * o,
                    y = i * h - n * o,
                    _ = r * d - a * l,
                    E = r * h - n * l,
                    S = a * h - n * d,
                    C = c * f - p * g,
                    M = c * v - u * g,
                    P = c * x - m * g,
                    R = p * v - u * f,
                    $ = p * x - m * f,
                    k = u * x - m * v,
                    L = b * k - w * $ + y * R + _ * P - E * M + S * C;
                return L ? (L = 1 / L, s[0] = (l * k - d * $ + h * R) * L, s[1] = (a * $ - r * k - n * R) * L, s[2] = (f * S - v * E + x * _) * L, s[3] = (u * E - p * S - m * _) * L, s[4] = (d * P - o * k - h * M) * L, s[5] = (i * k - a * P + n * M) * L, s[6] = (v * y - g * S - x * w) * L, s[7] = (c * S - u * y + m * w) * L, s[8] = (o * $ - l * P + h * C) * L, s[9] = (r * P - i * $ - n * C) * L, s[10] = (g * E - f * y + x * b) * L, s[11] = (p * y - c * E - m * b) * L, s[12] = (l * M - o * R - d * C) * L, s[13] = (i * R - r * M + a * C) * L, s[14] = (f * w - g * _ - v * b) * L, s[15] = (c * _ - p * w + u * b) * L, t) : null
            }
            scale(e) {
                let t = this.elements;
                return t[0] *= e.x, t[1] *= e.x, t[2] *= e.x, t[3] *= e.x, t[4] *= e.y, t[5] *= e.y, t[6] *= e.y, t[7] *= e.y, t[8] *= e.z, t[9] *= e.z, t[10] *= e.z, t[11] *= e.z, this
            }
            compose(e, t, s) {
                let i = this.elements;
                const r = t.elements[0],
                    a = t.elements[1],
                    n = t.elements[2],
                    o = t.elements[3],
                    l = r + r,
                    d = a + a,
                    h = n + n,
                    c = r * l,
                    p = r * d,
                    u = r * h,
                    m = a * d,
                    g = a * h,
                    f = n * h,
                    v = o * l,
                    x = o * d,
                    b = o * h,
                    w = s.x,
                    y = s.y,
                    _ = s.z;
                return i[0] = (1 - (m + f)) * w, i[1] = (p + b) * w, i[2] = (u - x) * w, i[3] = 0, i[4] = (p - b) * y, i[5] = (1 - (c + f)) * y, i[6] = (g + v) * y, i[7] = 0, i[8] = (u + x) * _, i[9] = (g - v) * _, i[10] = (1 - (c + m)) * _, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
            }
            composeFromOrigin(e, t, s, i) {
                let r = this.elements;
                const a = t.elements[0],
                    n = t.elements[1],
                    o = t.elements[2],
                    l = t.elements[3],
                    d = a + a,
                    h = n + n,
                    c = o + o,
                    p = a * d,
                    u = a * h,
                    m = a * c,
                    g = n * h,
                    f = n * c,
                    v = o * c,
                    x = l * d,
                    b = l * h,
                    w = l * c,
                    y = s.x,
                    _ = s.y,
                    T = s.z,
                    E = i.x,
                    S = i.y,
                    C = i.z,
                    M = (1 - (g + v)) * y,
                    P = (u + w) * y,
                    R = (m - b) * y,
                    $ = (u - w) * _,
                    k = (1 - (p + v)) * _,
                    L = (f + x) * _,
                    z = (m + b) * T,
                    A = (f - x) * T,
                    O = (1 - (p + g)) * T;
                return r[0] = M, r[1] = P, r[2] = R, r[3] = 0, r[4] = $, r[5] = k, r[6] = L, r[7] = 0, r[8] = z, r[9] = A, r[10] = O, r[11] = 0, r[12] = e.x + E - (M * E + $ * S + z * C), r[13] = e.y + S - (P * E + k * S + A * C), r[14] = e.z + C - (R * E + L * S + O * C), r[15] = 1, this
            }
        }
        class E {
            constructor(e = 0, t = e) {
                this.type = "Vec2", this._x = e, this._y = t
            }
            get x() {
                return this._x
            }
            get y() {
                return this._y
            }
            set x(e) {
                const t = e !== this._x;
                this._x = e, t && this._onChangeCallback && this._onChangeCallback()
            }
            set y(e) {
                const t = e !== this._y;
                this._y = e, t && this._onChangeCallback && this._onChangeCallback()
            }
            onChange(e) {
                return e && (this._onChangeCallback = e), this
            }
            set(e, t) {
                return this._x = e, this._y = t, this
            }
            add(e) {
                return this._x += e.x, this._y += e.y, this
            }
            addScalar(e) {
                return this._x += e, this._y += e, this
            }
            sub(e) {
                return this._x -= e.x, this._y -= e.y, this
            }
            subScalar(e) {
                return this._x -= e, this._y -= e, this
            }
            multiply(e) {
                return this._x *= e.x, this._y *= e.y, this
            }
            multiplyScalar(e) {
                return this._x *= e, this._y *= e, this
            }
            copy(e) {
                return this._x = e.x, this._y = e.y, this
            }
            clone() {
                return new E(this._x, this._y)
            }
            sanitizeNaNValuesWith(e) {
                return this._x = isNaN(this._x) ? e.x : parseFloat(this._x), this._y = isNaN(this._y) ? e.y : parseFloat(this._y), this
            }
            max(e) {
                return this._x = Math.max(this._x, e.x), this._y = Math.max(this._y, e.y), this
            }
            min(e) {
                return this._x = Math.min(this._x, e.x), this._y = Math.min(this._y, e.y), this
            }
            equals(e) {
                return this._x === e.x && this._y === e.y
            }
            normalize() {
                let e = this._x * this._x + this._y * this._y;
                return e > 0 && (e = 1 / Math.sqrt(e)), this._x *= e, this._y *= e, this
            }
            dot(e) {
                return this._x * e.x + this._y * e.y
            }
        }
        class S {
            constructor(e = 0, t = e, s = e) {
                this.type = "Vec3", this._x = e, this._y = t, this._z = s
            }
            get x() {
                return this._x
            }
            get y() {
                return this._y
            }
            get z() {
                return this._z
            }
            set x(e) {
                const t = e !== this._x;
                this._x = e, t && this._onChangeCallback && this._onChangeCallback()
            }
            set y(e) {
                const t = e !== this._y;
                this._y = e, t && this._onChangeCallback && this._onChangeCallback()
            }
            set z(e) {
                const t = e !== this._z;
                this._z = e, t && this._onChangeCallback && this._onChangeCallback()
            }
            onChange(e) {
                return e && (this._onChangeCallback = e), this
            }
            set(e, t, s) {
                return this._x = e, this._y = t, this._z = s, this
            }
            add(e) {
                return this._x += e.x, this._y += e.y, this._z += e.z, this
            }
            addScalar(e) {
                return this._x += e, this._y += e, this._z += e, this
            }
            sub(e) {
                return this._x -= e.x, this._y -= e.y, this._z -= e.z, this
            }
            subScalar(e) {
                return this._x -= e, this._y -= e, this._z -= e, this
            }
            multiply(e) {
                return this._x *= e.x, this._y *= e.y, this._z *= e.z, this
            }
            multiplyScalar(e) {
                return this._x *= e, this._y *= e, this._z *= e, this
            }
            copy(e) {
                return this._x = e.x, this._y = e.y, this._z = e.z, this
            }
            clone() {
                return new S(this._x, this._y, this._z)
            }
            sanitizeNaNValuesWith(e) {
                return this._x = isNaN(this._x) ? e.x : parseFloat(this._x), this._y = isNaN(this._y) ? e.y : parseFloat(this._y), this._z = isNaN(this._z) ? e.z : parseFloat(this._z), this
            }
            max(e) {
                return this._x = Math.max(this._x, e.x), this._y = Math.max(this._y, e.y), this._z = Math.max(this._z, e.z), this
            }
            min(e) {
                return this._x = Math.min(this._x, e.x), this._y = Math.min(this._y, e.y), this._z = Math.min(this._z, e.z), this
            }
            equals(e) {
                return this._x === e.x && this._y === e.y && this._z === e.z
            }
            normalize() {
                let e = this._x * this._x + this._y * this._y + this._z * this._z;
                return e > 0 && (e = 1 / Math.sqrt(e)), this._x *= e, this._y *= e, this._z *= e, this
            }
            dot(e) {
                return this._x * e.x + this._y * e.y + this._z * e.z
            }
            applyMat4(e) {
                const t = this._x,
                    s = this._y,
                    i = this._z,
                    r = e.elements;
                let a = r[3] * t + r[7] * s + r[11] * i + r[15];
                return a = a || 1, this._x = (r[0] * t + r[4] * s + r[8] * i + r[12]) / a, this._y = (r[1] * t + r[5] * s + r[9] * i + r[13]) / a, this._z = (r[2] * t + r[6] * s + r[10] * i + r[14]) / a, this
            }
            applyQuat(e) {
                const t = this._x,
                    s = this._y,
                    i = this._z,
                    r = e.elements[0],
                    a = e.elements[1],
                    n = e.elements[2],
                    o = e.elements[3],
                    l = o * t + a * i - n * s,
                    d = o * s + n * t - r * i,
                    h = o * i + r * s - a * t,
                    c = -r * t - a * s - n * i;
                return this._x = l * o + c * -r + d * -n - h * -a, this._y = d * o + c * -a + h * -r - l * -n, this._z = h * o + c * -n + l * -a - d * -r, this
            }
            project(e) {
                return this.applyMat4(e.viewMatrix).applyMat4(e.projectionMatrix), this
            }
            unproject(e) {
                return this.applyMat4(e.projectionMatrix.getInverse()).applyMat4(e.worldMatrix), this
            }
        }
        const C = new E,
            M = new S,
            P = new T;
        class R {
            constructor(e, {
                isFBOTexture: t = !1,
                fromTexture: s = !1,
                loader: a,
                sampler: n,
                floatingPoint: o = "none",
                premultiplyAlpha: l = !1,
                anisotropy: d = 1,
                generateMipmap: h = null,
                wrapS: c,
                wrapT: p,
                minFilter: u,
                magFilter: m
            } = {}) {
                if (this.type = "Texture", (e = e && e.renderer || e) && "Renderer" === e.type) {
                    if (!e.gl) return void (e.production || i(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"))
                } else i(this.type + ": Renderer not passed as first argument", e);
                if (this.renderer = e, this.gl = this.renderer.gl, this.uuid = r(), this._globalParameters = {
                    unpackAlignment: 4,
                    flipY: !t,
                    premultiplyAlpha: !1,
                    shouldPremultiplyAlpha: l,
                    floatingPoint: o,
                    type: this.gl.UNSIGNED_BYTE,
                    internalFormat: this.gl.RGBA,
                    format: this.gl.RGBA
                }, this.parameters = {
                    anisotropy: d,
                    generateMipmap: h,
                    wrapS: c || this.gl.CLAMP_TO_EDGE,
                    wrapT: p || this.gl.CLAMP_TO_EDGE,
                    minFilter: u || this.gl.LINEAR,
                    magFilter: m || this.gl.LINEAR,
                    _shouldUpdate: !0
                }, this._initState(), this.sourceType = t ? "fbo" : "empty", this._useCache = !0, this._samplerName = n, this._sampler = {
                    isActive: !1,
                    isTextureBound: !1,
                    texture: this.gl.createTexture()
                }, this._textureMatrix = {
                    matrix: new T,
                    isActive: !1
                }, this._size = {
                    width: 1,
                    height: 1
                }, this.scale = new E(1), this.scale.onChange((() => this.resize())), this.offset = new E, this.offset.onChange((() => this.resize())), this._loader = a, this._sourceLoaded = !1, this._uploaded = !1, this._willUpdate = !1, this.shouldUpdate = !1, this._forceUpdate = !1, this.userData = {}, this._canDraw = !1, s) return this._copyOnInit = !0, void (this._copiedFrom = s);
                this._copyOnInit = !1, this._initTexture()
            }
            _initState() {
                this._state = {
                    anisotropy: 1,
                    generateMipmap: !1,
                    wrapS: null,
                    wrapT: null,
                    minFilter: null,
                    magFilter: this.gl.LINEAR
                }
            }
            _initTexture() {
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), "empty" === this.sourceType && (this._globalParameters.flipY = !1, this._updateGlobalTexParameters(), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])), this._canDraw = !0)
            }
            _restoreFromTexture() {
                this._copyOnInit || this._initTexture(), this._parent && (this._setTextureUniforms(), this._setSize()), this.copy(this._copiedFrom), this._canDraw = !0
            }
            _restoreContext() {
                if (this._canDraw = !1, this._sampler.texture = this.gl.createTexture(), this._sampler.isActive = !1, this._sampler.isTextureBound = !1, this._textureMatrix.isActive = !1, this._initState(), this._state.generateMipmap = !1, this.parameters._shouldUpdate = !0, this._copiedFrom) {
                    const e = this.renderer.nextRender.add((() => {
                        this._copiedFrom._canDraw && (this._restoreFromTexture(), e.keep = !1)
                    }), !0)
                } else this._initTexture(), this._parent && this._setParent(), this.source && (this.setSource(this.source), "image" === this.sourceType ? this.renderer.cache.addTexture(this) : this.needUpdate()), this._canDraw = !0
            }
            addParent(e) {
                !e || "Plane" !== e.type && "PingPongPlane" !== e.type && "ShaderPass" !== e.type && "RenderTarget" !== e.type ? this.renderer.production || t(this.type + ": cannot add texture as a child of ", e, " because it is not a valid parent") : (this._parent = e, this.index = this._parent.textures.length, this._parent.textures.push(this), this._setParent())
            }
            _setParent() {
                if (this._sampler.name = this._samplerName || "uSampler" + this.index, this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index, this._parent._program) {
                    if (!this._parent._program.compiled) return void (this.renderer.production || t(this.type + ": Unable to create the texture because the program is not valid"));
                    if (this._setTextureUniforms(), this._copyOnInit) {
                        const e = this.renderer.nextRender.add((() => {
                            this._copiedFrom._canDraw && this._copiedFrom._uploaded && (this.copy(this._copiedFrom), e.keep = !1)
                        }), !0);
                        return
                    }
                    this.source ? this._parent.loader && this._parent.loader._addSourceToParent(this.source, this.sourceType) : this._size = {
                        width: this._parent._boundingRect.document.width,
                        height: this._parent._boundingRect.document.height
                    }, this._setSize()
                } else "RenderTarget" === this._parent.type && (this._size = {
                    width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
                    height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
                }, this._upload(), this._updateTexParameters(), this._canDraw = !0)
            }
            hasParent() {
                return !!this._parent
            }
            _setTextureUniforms() {
                const e = this._parent._program.activeUniforms;
                for (let t = 0; t < e.textures.length; t++) e.textures[t] === this._sampler.name && (this._sampler.isActive = !0, this.renderer.useProgram(this._parent._program), this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name), e.textureMatrices.find((e => e === this._textureMatrix.name)) && (this._textureMatrix.isActive = !0, this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name)), this.gl.uniform1i(this._sampler.location, this.index))
            }
            copy(e) {
                e && "Texture" === e.type ? (this._globalParameters = Object.assign({}, e._globalParameters), this._state = Object.assign({}, e._state), this.parameters.generateMipmap = e.parameters.generateMipmap, this._state.generateMipmap = null, this._size = e._size, !this._sourceLoaded && e._sourceLoaded && this._onSourceLoadedCallback && this._onSourceLoadedCallback(), this._sourceLoaded = e._sourceLoaded, !this._uploaded && e._uploaded && this._onSourceUploadedCallback && this._onSourceUploadedCallback(), this._uploaded = e._uploaded, this.sourceType = e.sourceType, this.source = e.source, this._videoFrameCallbackID = e._videoFrameCallbackID, this._sampler.texture = e._sampler.texture, this._copiedFrom = e, !this._parent || !this._parent._program || this._canDraw && this._textureMatrix.matrix || (this._setSize(), this._canDraw = !0), this._updateTexParameters(), this.renderer.needRender()) : this.renderer.production || t(this.type + ": Unable to set the texture from texture:", e)
            }
            setSource(e) {
                this._sourceLoaded || this.renderer.nextRender.add((() => this._onSourceLoadedCallback && this._onSourceLoadedCallback()));
                const s = "IMG" === e.tagName.toUpperCase() ? "image" : e.tagName.toLowerCase();
                if ("video" !== s && "canvas" !== s || (this._useCache = !1), this._useCache) {
                    const t = this.renderer.cache.getTextureFromSource(e);
                    if (t && t.uuid !== this.uuid) return this._uploaded || (this.renderer.nextRender.add((() => this._onSourceUploadedCallback && this._onSourceUploadedCallback())), this._uploaded = !0), this.copy(t), void this.resize()
                }
                if ("empty" === this.sourceType || this.sourceType !== s)
                    if ("video" === s) this._willUpdate = !1, this.shouldUpdate = !0;
                    else if ("canvas" === s) this._willUpdate = !0, this.shouldUpdate = !0;
                    else {
                        if ("image" !== s) return void (this.renderer.production || t(this.type + ": this HTML tag could not be converted into a texture:", e.tagName));
                        this._willUpdate = !1, this.shouldUpdate = !1
                    }
                this.source = e, this.sourceType = s, this._size = {
                    width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                    height: this.source.naturalHeight || this.source.height || this.source.videoHeight
                }, this._sourceLoaded = !0, this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.resize(), this._globalParameters.flipY = !0, this._globalParameters.premultiplyAlpha = this._globalParameters.shouldPremultiplyAlpha, "image" === this.sourceType && (this.parameters.generateMipmap = this.parameters.generateMipmap || null === this.parameters.generateMipmap, this.parameters._shouldUpdate = this.parameters.generateMipmap, this._state.generateMipmap = !1, this._upload()), this.renderer.needRender()
            }
            _updateGlobalTexParameters() {
                this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment), this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment), this.renderer.state.flipY !== this._globalParameters.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY), this.renderer.state.flipY = this._globalParameters.flipY), this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha), this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha), "half-float" === this._globalParameters.floatingPoint ? this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.HALF_FLOAT) : this.renderer.extensions.OES_texture_half_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : this.renderer.production || t(this.type + ": could not use half-float textures because the extension is not available") : "float" === this._globalParameters.floatingPoint && (this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F, this._globalParameters.type = this.gl.FLOAT) : this.renderer.extensions.OES_texture_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.FLOAT : this.renderer.production || t(this.type + ": could not use float textures because the extension is not available"))
            }
            _updateTexParameters() {
                this.index && this.renderer.state.activeTexture !== this.index && this._bindTexture(), this.parameters.wrapS !== this._state.wrapS && (this.renderer._isWebGL2 || a(this._size.width) && a(this._size.height) || (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT && (this.renderer.production || t(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"), this.parameters.wrapS = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS), this._state.wrapS = this.parameters.wrapS), this.parameters.wrapT !== this._state.wrapT && (this.renderer._isWebGL2 || a(this._size.width) && a(this._size.height) || (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT && (this.renderer.production || t(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"), this.parameters.wrapT = this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT), this._state.wrapT = this.parameters.wrapT), this.parameters.generateMipmap && !this._state.generateMipmap && this.source && (this.renderer._isWebGL2 || a(this._size.width) && a(this._size.height) ? this.gl.generateMipmap(this.gl.TEXTURE_2D) : this.parameters.generateMipmap = !1, this._state.generateMipmap = this.parameters.generateMipmap), this.parameters.minFilter !== this._state.minFilter && (this.renderer._isWebGL2 || a(this._size.width) && a(this._size.height) || (this.parameters.minFilter = this.gl.LINEAR), this.parameters.generateMipmap || null === this.parameters.generateMipmap || (this.parameters.minFilter = this.gl.LINEAR), this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR && (this.renderer.production || t(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"), this.parameters.minFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter), this._state.minFilter = this.parameters.minFilter), this.parameters.magFilter !== this._state.magFilter && (this.renderer._isWebGL2 || a(this._size.width) && a(this._size.height) || (this.parameters.magFilter = this.gl.LINEAR), this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST && (this.renderer.production || t(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"), this.parameters.magFilter = this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter), this._state.magFilter = this.parameters.magFilter);
                const e = this.renderer.extensions.EXT_texture_filter_anisotropic;
                if (e && this.parameters.anisotropy !== this._state.anisotropy) {
                    const t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, t)), this.gl.texParameterf(this.gl.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy), this._state.anisotropy = this.parameters.anisotropy
                }
            }
            setWrapS(e) {
                this.parameters.wrapS !== e && (this.parameters.wrapS = e, this.parameters._shouldUpdate = !0)
            }
            setWrapT(e) {
                this.parameters.wrapT !== e && (this.parameters.wrapT = e, this.parameters._shouldUpdate = !0)
            }
            setMinFilter(e) {
                this.parameters.minFilter !== e && (this.parameters.minFilter = e, this.parameters._shouldUpdate = !0)
            }
            setMagFilter(e) {
                this.parameters.magFilter !== e && (this.parameters.magFilter = e, this.parameters._shouldUpdate = !0)
            }
            setAnisotropy(e) {
                e = isNaN(e) ? this.parameters.anisotropy : e, this.parameters.anisotropy !== e && (this.parameters.anisotropy = e, this.parameters._shouldUpdate = !0)
            }
            needUpdate() {
                this._forceUpdate = !0
            }
            _videoFrameCallback() {
                this._willUpdate = !0, this.source.requestVideoFrameCallback((() => this._videoFrameCallback()))
            }
            _upload() {
                this._updateGlobalTexParameters(), this.source ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source) : "fbo" === this.sourceType && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source || null), this._uploaded || (this.renderer.nextRender.add((() => this._onSourceUploadedCallback && this._onSourceUploadedCallback())), this._uploaded = !0)
            }
            _getSizes() {
                if ("fbo" === this.sourceType) return {
                    parentWidth: this._parent._boundingRect.document.width,
                    parentHeight: this._parent._boundingRect.document.height,
                    sourceWidth: this._parent._boundingRect.document.width,
                    sourceHeight: this._parent._boundingRect.document.height,
                    xOffset: 0,
                    yOffset: 0
                };
                const e = this._parent.scale ? C.set(this._parent.scale.x, this._parent.scale.y) : C.set(1, 1),
                    t = this._parent._boundingRect.document.width * e.x,
                    s = this._parent._boundingRect.document.height * e.y,
                    i = this._size.width,
                    r = this._size.height,
                    a = i / r,
                    n = t / s;
                let o = 0,
                    l = 0;
                return n > a ? l = Math.min(0, s - t * (1 / a)) : n < a && (o = Math.min(0, t - s * a)), {
                    parentWidth: t,
                    parentHeight: s,
                    sourceWidth: i,
                    sourceHeight: r,
                    xOffset: o,
                    yOffset: l
                }
            }
            setScale(e) {
                e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.scale).max(C.set(.001, .001)), e.equals(this.scale) || (this.scale.copy(e), this.resize())) : this.renderer.production || t(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e)
            }
            setOffset(e) {
                e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.offset), e.equals(this.offset) || (this.offset.copy(e), this.resize())) : this.renderer.production || t(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale)
            }
            _setSize() {
                if (this._parent && this._parent._program) {
                    const e = this._getSizes();
                    this._updateTextureMatrix(e)
                }
            }
            resize() {
                "fbo" === this.sourceType ? (this._size = {
                    width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
                    height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
                }, this._copiedFrom || (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null))) : this.source && (this._size = {
                    width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                    height: this.source.naturalHeight || this.source.height || this.source.videoHeight
                }), this._setSize()
            }
            _updateTextureMatrix(e) {
                const t = M.set(e.parentWidth / (e.parentWidth - e.xOffset), e.parentHeight / (e.parentHeight - e.yOffset), 1);
                t.x /= this.scale.x, t.y /= this.scale.y, this._textureMatrix.matrix = P.setFromArray([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, (1 - t.x) / 2 + this.offset.x, (1 - t.y) / 2 + this.offset.y, 0, 1]), this._updateMatrixUniform()
            }
            _updateMatrixUniform() {
                this._textureMatrix.isActive && (this.renderer.useProgram(this._parent._program), this.gl.uniformMatrix4fv(this._textureMatrix.location, !1, this._textureMatrix.matrix.elements))
            }
            _onSourceLoaded(e) {
                this.setSource(e), "image" === this.sourceType && this.renderer.cache.addTexture(this)
            }
            _bindTexture() {
                this._canDraw && (this.renderer.state.activeTexture !== this.index && (this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.renderer.state.activeTexture = this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture), this._sampler.isTextureBound || (this._sampler.isTextureBound = !!this.gl.getParameter(this.gl.TEXTURE_BINDING_2D), this._sampler.isTextureBound && this.renderer.needRender()))
            }
            _draw() {
                this._sampler.isActive && (this._bindTexture(), "video" === this.sourceType && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused && (this._willUpdate = !0), (this._forceUpdate || this._willUpdate && this.shouldUpdate) && (this._state.generateMipmap = !1, this._upload()), "video" === this.sourceType && (this._willUpdate = !1), this._forceUpdate = !1), this.parameters._shouldUpdate && (this._updateTexParameters(), this.parameters._shouldUpdate = !1)
            }
            onSourceLoaded(e) {
                return e && (this._onSourceLoadedCallback = e), this
            }
            onSourceUploaded(e) {
                return e && (this._onSourceUploadedCallback = e), this
            }
            _dispose(e = !1) {
                "video" === this.sourceType || "image" === this.sourceType && !this.renderer.state.isActive ? (this._loader && this._loader._removeSource(this), this.source = null) : "canvas" === this.sourceType && (this.source.width = this.source.width, this.source = null), this._parent = null, this.gl && !this._copiedFrom && (e || "image" !== this.sourceType || !this.renderer.state.isActive) && (this._canDraw = !1, this.renderer.cache.removeTexture(this), this.gl.activeTexture(this.gl.TEXTURE0 + this.index), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.deleteTexture(this._sampler.texture))
            }
        }
        class $ {
            constructor(e, t = "anonymous") {
                if (this.type = "TextureLoader", (e = e && e.renderer || e) && "Renderer" === e.type) {
                    if (!e.gl) return void i(this.type + ": Renderer WebGL context is undefined", e)
                } else i(this.type + ": Renderer not passed as first argument", e);
                this.renderer = e, this.gl = this.renderer.gl, this.crossOrigin = t, this.elements = []
            }
            _addElement(e, t, s, i) {
                const r = {
                    source: e,
                    texture: t,
                    load: this._sourceLoaded.bind(this, e, t, s),
                    error: this._sourceLoadError.bind(this, e, i)
                };
                return this.elements.push(r), r
            }
            _sourceLoadError(e, t, s) {
                t && t(e, s)
            }
            _sourceLoaded(e, t, s) {
                t._sourceLoaded || (t._onSourceLoaded(e), this._parent && (this._increment && this._increment(), this.renderer.nextRender.add((() => this._parent._onLoadingCallback && this._parent._onLoadingCallback(t)))), s && s(t))
            }
            _getSourceType(e) {
                let t;
                return "string" == typeof e ? null !== e.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg|avif|apng)$/) ? t = "image" : null !== e.match(/\.(webm|mp4|mpg|mpeg|avi|ogg|ogm|ogv|mov|av1)$/) && (t = "video") : "IMG" === e.tagName.toUpperCase() ? t = "image" : "VIDEO" === e.tagName.toUpperCase() ? t = "video" : "CANVAS" === e.tagName.toUpperCase() && (t = "canvas"), t
            }
            _createImage(e) {
                if ("string" != typeof e && e.hasAttribute("crossOrigin")) return e;
                {
                    const t = new Image;
                    return t.crossOrigin = this.crossOrigin, "string" == typeof e ? t.src = e : (t.src = e.src, e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))), t
                }
            }
            _createVideo(e) {
                if ("string" == typeof e || null === e.getAttribute("crossOrigin")) {
                    const t = document.createElement("video");
                    return t.crossOrigin = this.crossOrigin, "string" == typeof e ? t.src = e : (t.src = e.src, e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))), t
                }
                return e
            }
            loadSource(e, t, s, i) {
                switch (this._getSourceType(e)) {
                    case "image":
                        this.loadImage(e, t, s, i);
                        break;
                    case "video":
                        this.loadVideo(e, t, s, i);
                        break;
                    case "canvas":
                        this.loadCanvas(e, t, s);
                        break;
                    default:
                        this._sourceLoadError(e, i, "this source could not be converted into a texture: " + e)
                }
            }
            loadSources(e, t, s, i) {
                for (let r = 0; r < e.length; r++) this.loadSource(e[r], t, s, i)
            }
            loadImage(e, t = {}, s, i) {
                const r = this.renderer.cache.getTextureFromSource(e);
                let a = Object.assign({}, t);
                if (this._parent && (a = Object.assign(a, this._parent._texturesOptions)), a.loader = this, r) {
                    a.sampler = "string" != typeof e && e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : a.sampler, a.fromTexture = r;
                    const t = new R(this.renderer, a);
                    return this._sourceLoaded(r.source, t, s), void (this._parent && this._addToParent(t, r.source, "image"))
                }
                const n = this._createImage(e);
                a.sampler = n.hasAttribute("data-sampler") ? n.getAttribute("data-sampler") : a.sampler;
                const o = new R(this.renderer, a),
                    l = this._addElement(n, o, s, i);
                n.complete ? this._sourceLoaded(n, o, s) : n.decode ? n.decode().then(this._sourceLoaded.bind(this, n, o, s)).catch((() => {
                    n.addEventListener("load", l.load, !1), n.addEventListener("error", l.error, !1)
                })) : (n.addEventListener("load", l.load, !1), n.addEventListener("error", l.error, !1)), this._parent && this._addToParent(o, n, "image")
            }
            loadImages(e, t, s, i) {
                for (let r = 0; r < e.length; r++) this.loadImage(e[r], t, s, i)
            }
            loadVideo(e, t = {}, s, i) {
                const r = this._createVideo(e);
                r.preload = !0, r.muted = !0, r.loop = !0, r.setAttribute("playsinline", ""), r.crossOrigin = this.crossOrigin;
                let a = Object.assign({}, t);
                this._parent && (a = Object.assign(t, this._parent._texturesOptions)), a.loader = this, a.sampler = r.hasAttribute("data-sampler") ? r.getAttribute("data-sampler") : a.sampler;
                const n = new R(this.renderer, a),
                    o = this._addElement(r, n, s, i);
                r.addEventListener("canplaythrough", o.load, !1), r.addEventListener("error", o.error, !1), r.readyState >= r.HAVE_FUTURE_DATA && s && this._sourceLoaded(r, n, s), r.load(), this._addToParent && this._addToParent(n, r, "video"), "requestVideoFrameCallback" in HTMLVideoElement.prototype && (o.videoFrameCallback = n._videoFrameCallback.bind(n), n._videoFrameCallbackID = r.requestVideoFrameCallback(o.videoFrameCallback))
            }
            loadVideos(e, t, s, i) {
                for (let r = 0; r < e.length; r++) this.loadVideo(e[r], t, s, i)
            }
            loadCanvas(e, t = {}, s) {
                let i = Object.assign({}, t);
                this._parent && (i = Object.assign(t, this._parent._texturesOptions)), i.loader = this, i.sampler = e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : i.sampler;
                const r = new R(this.renderer, i);
                this._addElement(e, r, s, null), this._sourceLoaded(e, r, s), this._parent && this._addToParent(r, e, "canvas")
            }
            loadCanvases(e, t, s) {
                for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, s)
            }
            _removeSource(e) {
                const t = this.elements.find((t => t.texture.uuid === e.uuid));
                t && ("image" === e.sourceType ? t.source.removeEventListener("load", t.load, !1) : "video" === e.sourceType && (t.videoFrameCallback && e._videoFrameCallbackID && t.source.cancelVideoFrameCallback(e._videoFrameCallbackID), t.source.removeEventListener("canplaythrough", t.load, !1), t.source.pause(), t.source.removeAttribute("src"), t.source.load()), t.source.removeEventListener("error", t.error, !1))
            }
        }
        class k extends $ {
            constructor(e, s, {
                sourcesLoaded: i = 0,
                sourcesToLoad: r = 0,
                complete: a = !1,
                onComplete: n = (() => { })
            } = {}) {
                super(e, s.crossOrigin), this.type = "PlaneTextureLoader", this._parent = s, "Plane" !== this._parent.type && "PingPongPlane" !== this._parent.type && "ShaderPass" !== this._parent.type && (t(this.type + ": Wrong parent type assigned to this loader"), this._parent = null), this.sourcesLoaded = i, this.sourcesToLoad = r, this.complete = a, this.onComplete = n
            }
            _setLoaderSize(e) {
                this.sourcesToLoad = e, 0 === this.sourcesToLoad && (this.complete = !0, this.renderer.nextRender.add((() => this.onComplete && this.onComplete())))
            }
            _increment() {
                this.sourcesLoaded++, this.sourcesLoaded >= this.sourcesToLoad && !this.complete && (this.complete = !0, this.renderer.nextRender.add((() => this.onComplete && this.onComplete())))
            }
            _addSourceToParent(e, t) {
                if ("image" === t) {
                    const t = this._parent.images;
                    !t.find((t => t.src === e.src)) && t.push(e)
                } else if ("video" === t) {
                    const t = this._parent.videos;
                    !t.find((t => t.src === e.src)) && t.push(e)
                } else if ("canvas" === t) {
                    const t = this._parent.canvases;
                    !t.find((t => t.isSameNode(e))) && t.push(e)
                }
            }
            _addToParent(e, t, s) {
                this._addSourceToParent(t, s), this._parent && e.addParent(this._parent)
            }
        }
        class L {
            constructor(e, t = "Mesh", {
                vertexShaderID: s,
                fragmentShaderID: r,
                vertexShader: a,
                fragmentShader: n,
                uniforms: o = {},
                widthSegments: l = 1,
                heightSegments: d = 1,
                renderOrder: h = 0,
                depthTest: c = !0,
                cullFace: p = "back",
                texturesOptions: u = {},
                crossOrigin: m = "anonymous"
            } = {}) {
                if (this.type = t, (e = e && e.renderer || e) && "Renderer" === e.type || (i(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", e), setTimeout((() => {
                    this._onErrorCallback && this._onErrorCallback()
                }), 0)), this.renderer = e, this.gl = this.renderer.gl, !this.gl) return this.renderer.production || i(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"), void setTimeout((() => {
                    this._onErrorCallback && this._onErrorCallback()
                }), 0);
                this._canDraw = !1, this.renderOrder = h, this._depthTest = c, this.cullFace = p, "back" !== this.cullFace && "front" !== this.cullFace && "none" !== this.cullFace && (this.cullFace = "back"), this.textures = [], this._texturesOptions = Object.assign({
                    premultiplyAlpha: !1,
                    anisotropy: 1,
                    floatingPoint: "none",
                    wrapS: this.gl.CLAMP_TO_EDGE,
                    wrapT: this.gl.CLAMP_TO_EDGE,
                    minFilter: this.gl.LINEAR,
                    magFilter: this.gl.LINEAR
                }, u), this.crossOrigin = m, !a && s && document.getElementById(s) && (a = document.getElementById(s).innerHTML), !n && r && document.getElementById(r) && (n = document.getElementById(r).innerHTML), this._initMesh(), l = parseInt(l), d = parseInt(d), this._geometry = new _(this.renderer, {
                    width: l,
                    height: d
                }), this._program = new y(this.renderer, {
                    parent: this,
                    vertexShader: a,
                    fragmentShader: n
                }), this._program.compiled ? (this._program.createUniforms(o), this.uniforms = this._program.uniformsManager.uniforms, this._geometry.setProgram(this._program), this.renderer.onSceneChange()) : this.renderer.nextRender.add((() => this._onErrorCallback && this._onErrorCallback()))
            }
            _initMesh() {
                this.uuid = r(), this.loader = new k(this.renderer, this, {
                    sourcesLoaded: 0,
                    initSourcesToLoad: 0,
                    complete: !1,
                    onComplete: () => {
                        this._onReadyCallback && this._onReadyCallback(), this.renderer.needRender()
                    }
                }), this.images = [], this.videos = [], this.canvases = [], this.userData = {}, this._canDraw = !0
            }
            _restoreContext() {
                this._canDraw = !1, this._matrices && (this._matrices = null), this._program = new y(this.renderer, {
                    parent: this,
                    vertexShader: this._program.vsCode,
                    fragmentShader: this._program.fsCode
                }), this._program.compiled && (this._geometry.restoreContext(this._program), this._program.createUniforms(this.uniforms), this.uniforms = this._program.uniformsManager.uniforms, this._programRestored())
            }
            setRenderTarget(e) {
                e && "RenderTarget" === e.type ? ("Plane" === this.type && this.renderer.scene.removePlane(this), this.target = e, "Plane" === this.type && this.renderer.scene.addPlane(this)) : this.renderer.production || t(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", e)
            }
            setRenderOrder(e = 0) {
                (e = isNaN(e) ? this.renderOrder : parseInt(e)) !== this.renderOrder && (this.renderOrder = e, this.renderer.scene.setPlaneRenderOrder(this))
            }
            createTexture(e = {}) {
                const t = new R(this.renderer, Object.assign(e, this._texturesOptions));
                return t.addParent(this), t
            }
            addTexture(e) {
                e && "Texture" === e.type ? e.addParent(this) : this.renderer.production || t(this.type + ": cannot add ", e, " to this " + this.type + " because it is not a valid texture")
            }
            loadSources(e, t = {}, s, i) {
                for (let r = 0; r < e.length; r++) this.loadSource(e[r], t, s, i)
            }
            loadSource(e, s = {}, i, r) {
                this.loader.loadSource(e, Object.assign(s, this._texturesOptions), (e => {
                    i && i(e)
                }), ((e, s) => {
                    this.renderer.production || t(this.type + ": this HTML tag could not be converted into a texture:", e.tagName), r && r(e, s)
                }))
            }
            loadImage(e, s = {}, i, r) {
                this.loader.loadImage(e, Object.assign(s, this._texturesOptions), (e => {
                    i && i(e)
                }), ((e, s) => {
                    this.renderer.production || t(this.type + ": There has been an error:\n", s, "\nwhile loading this image:\n", e), r && r(e, s)
                }))
            }
            loadVideo(e, s = {}, i, r) {
                this.loader.loadVideo(e, Object.assign(s, this._texturesOptions), (e => {
                    i && i(e)
                }), ((e, s) => {
                    this.renderer.production || t(this.type + ": There has been an error:\n", s, "\nwhile loading this video:\n", e), r && r(e, s)
                }))
            }
            loadCanvas(e, t = {}, s) {
                this.loader.loadCanvas(e, Object.assign(t, this._texturesOptions), (e => {
                    s && s(e)
                }))
            }
            loadImages(e, t = {}, s, i) {
                for (let r = 0; r < e.length; r++) this.loadImage(e[r], t, s, i)
            }
            loadVideos(e, t = {}, s, i) {
                for (let r = 0; r < e.length; r++) this.loadVideo(e[r], t, s, i)
            }
            loadCanvases(e, t = {}, s) {
                for (let i = 0; i < e.length; i++) this.loadCanvas(e[i], t, s)
            }
            playVideos() {
                for (let e = 0; e < this.textures.length; e++) {
                    const s = this.textures[e];
                    if ("video" === s.sourceType) {
                        const e = s.source.play();
                        void 0 !== e && e.catch((e => {
                            this.renderer.production || t(this.type + ": Could not play the video : ", e)
                        }))
                    }
                }
            }
            _draw() {
                this.renderer.setDepthTest(this._depthTest), this.renderer.setFaceCulling(this.cullFace), this._program.updateUniforms(), this._geometry.bindBuffers(), this.renderer.state.forceBufferUpdate = !1;
                for (let e = 0; e < this.textures.length; e++)
                    if (this.textures[e]._draw(), this.textures[e]._sampler.isActive && !this.textures[e]._sampler.isTextureBound) return;
                this._geometry.draw(), this.renderer.state.activeTexture = null, this._onAfterRenderCallback && this._onAfterRenderCallback()
            }
            onError(e) {
                return e && (this._onErrorCallback = e), this
            }
            onLoading(e) {
                return e && (this._onLoadingCallback = e), this
            }
            onReady(e) {
                return e && (this._onReadyCallback = e), this
            }
            onRender(e) {
                return e && (this._onRenderCallback = e), this
            }
            onAfterRender(e) {
                return e && (this._onAfterRenderCallback = e), this
            }
            remove() {
                this._canDraw = !1, this.target && this.renderer.bindFrameBuffer(null), this._dispose(), "Plane" === this.type ? this.renderer.removePlane(this) : "ShaderPass" === this.type && (this.target && (this.target._shaderPass = null, this.target.remove(), this.target = null), this.renderer.removeShaderPass(this))
            }
            _dispose() {
                if (this.gl) {
                    this._geometry && this._geometry.dispose(), this.target && "ShaderPass" === this.type && (this.renderer.removeRenderTarget(this.target), this.textures.shift());
                    for (let e = 0; e < this.textures.length; e++) this.textures[e]._dispose();
                    this.textures = []
                }
            }
        }
        const z = new E,
            A = new E;
        class O extends L {
            constructor(e, s, i = "DOMMesh", {
                widthSegments: r,
                heightSegments: a,
                renderOrder: n,
                depthTest: o,
                cullFace: l,
                uniforms: d,
                vertexShaderID: h,
                fragmentShaderID: c,
                vertexShader: p,
                fragmentShader: u,
                texturesOptions: m,
                crossOrigin: g
            } = {}) {
                super(e, i, {
                    widthSegments: r,
                    heightSegments: a,
                    renderOrder: n,
                    depthTest: o,
                    cullFace: l,
                    uniforms: d,
                    vertexShaderID: h = h || s && s.getAttribute("data-vs-id"),
                    fragmentShaderID: c = c || s && s.getAttribute("data-fs-id"),
                    vertexShader: p,
                    fragmentShader: u,
                    texturesOptions: m,
                    crossOrigin: g
                }), this.gl && (this.htmlElement = s, this.htmlElement && 0 !== this.htmlElement.length || this.renderer.production || t(this.type + ": The HTML element you specified does not currently exists in the DOM"), this._setDocumentSizes())
            }
            _setDocumentSizes() {
                let e = this.htmlElement.getBoundingClientRect();
                this._boundingRect || (this._boundingRect = {}), this._boundingRect.document = {
                    width: e.width * this.renderer.pixelRatio,
                    height: e.height * this.renderer.pixelRatio,
                    top: e.top * this.renderer.pixelRatio,
                    left: e.left * this.renderer.pixelRatio
                }
            }
            getBoundingRect() {
                return {
                    width: this._boundingRect.document.width,
                    height: this._boundingRect.document.height,
                    top: this._boundingRect.document.top,
                    left: this._boundingRect.document.left,
                    right: this._boundingRect.document.left + this._boundingRect.document.width,
                    bottom: this._boundingRect.document.top + this._boundingRect.document.height
                }
            }
            resize() {
                this._setDocumentSizes(), "Plane" === this.type && (this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._setWorldSizes(), this._applyWorldPositions());
                for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
                this.renderer.nextRender.add((() => this._onAfterResizeCallback && this._onAfterResizeCallback()))
            }
            mouseToPlaneCoords(e) {
                const t = this.scale ? this.scale : A.set(1, 1),
                    s = z.set((this._boundingRect.document.width - this._boundingRect.document.width * t.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * t.y) / 2),
                    i = this._boundingRect.document.width * t.x / this.renderer.pixelRatio,
                    r = this._boundingRect.document.height * t.y / this.renderer.pixelRatio,
                    a = (this._boundingRect.document.top + s.y) / this.renderer.pixelRatio,
                    n = (this._boundingRect.document.left + s.x) / this.renderer.pixelRatio;
                return z.set((e.x - n) / i * 2 - 1, 1 - (e.y - a) / r * 2)
            }
            onAfterResize(e) {
                return e && (this._onAfterResizeCallback = e), this
            }
        }
        class I {
            constructor({
                fov: e = 50,
                near: t = .1,
                far: s = 150,
                width: i,
                height: r,
                pixelRatio: a = 1
            } = {}) {
                this.position = new S, this.projectionMatrix = new T, this.worldMatrix = new T, this.viewMatrix = new T, this._shouldUpdate = !1, this.setSize(), this.setPerspective(e, t, s, i, r, a)
            }
            setFov(e) {
                e = isNaN(e) ? this.fov : parseFloat(e), (e = Math.max(1, Math.min(e, 179))) !== this.fov && (this.fov = e, this.setPosition(), this._shouldUpdate = !0), this.setCSSPerspective()
            }
            setNear(e) {
                e = isNaN(e) ? this.near : parseFloat(e), (e = Math.max(e, .01)) !== this.near && (this.near = e, this._shouldUpdate = !0)
            }
            setFar(e) {
                e = isNaN(e) ? this.far : parseFloat(e), (e = Math.max(e, 50)) !== this.far && (this.far = e, this._shouldUpdate = !0)
            }
            setPixelRatio(e) {
                e !== this.pixelRatio && (this._shouldUpdate = !0), this.pixelRatio = e
            }
            setSize(e, t) {
                e === this.width && t === this.height || (this._shouldUpdate = !0), this.width = e, this.height = t
            }
            setPerspective(e, t, s, i, r, a) {
                this.setPixelRatio(a), this.setSize(i, r), this.setFov(e), this.setNear(t), this.setFar(s), this._shouldUpdate && this.updateProjectionMatrix()
            }
            setPosition() {
                this.position.set(0, 0, 1), this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]), this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse()
            }
            setCSSPerspective() {
                this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), .5) / Math.tan(.5 * this.fov * Math.PI / 180)
            }
            getScreenRatiosFromFov(e = 0) {
                const t = this.position.z;
                e < t ? e -= t : e += t;
                const s = this.fov * Math.PI / 180,
                    i = 2 * Math.tan(s / 2) * Math.abs(e);
                return {
                    width: i * this.width / this.height,
                    height: i
                }
            }
            updateProjectionMatrix() {
                const e = this.width / this.height,
                    t = this.near * Math.tan(Math.PI / 180 * .5 * this.fov),
                    s = 2 * t,
                    i = e * s,
                    r = -.5 * i,
                    a = r + i,
                    n = t - s,
                    o = 2 * this.near / (a - r),
                    l = 2 * this.near / (t - n),
                    d = (a + r) / (a - r),
                    h = (t + n) / (t - n),
                    c = -(this.far + this.near) / (this.far - this.near),
                    p = -2 * this.far * this.near / (this.far - this.near);
                this.projectionMatrix.setFromArray([o, 0, 0, 0, 0, l, 0, 0, d, h, c, -1, 0, 0, p, 0])
            }
            forceUpdate() {
                this._shouldUpdate = !0
            }
            cancelUpdate() {
                this._shouldUpdate = !1
            }
        }
        class D {
            constructor(e = new Float32Array([0, 0, 0, 1]), t = "XYZ") {
                this.type = "Quat", this.elements = e, this.axisOrder = t
            }
            setFromArray(e) {
                return this.elements[0] = e[0], this.elements[1] = e[1], this.elements[2] = e[2], this.elements[3] = e[3], this
            }
            setAxisOrder(e) {
                switch (e = e.toUpperCase()) {
                    case "XYZ":
                    case "YXZ":
                    case "ZXY":
                    case "ZYX":
                    case "YZX":
                    case "XZY":
                        this.axisOrder = e;
                        break;
                    default:
                        this.axisOrder = "XYZ"
                }
                return this
            }
            copy(e) {
                return this.elements = e.elements, this.axisOrder = e.axisOrder, this
            }
            clone() {
                return (new D).copy(this)
            }
            equals(e) {
                return this.elements[0] === e.elements[0] && this.elements[1] === e.elements[1] && this.elements[2] === e.elements[2] && this.elements[3] === e.elements[3] && this.axisOrder === e.axisOrder
            }
            setFromVec3(e) {
                const t = .5 * e.x,
                    s = .5 * e.y,
                    i = .5 * e.z,
                    r = Math.cos(t),
                    a = Math.cos(s),
                    n = Math.cos(i),
                    o = Math.sin(t),
                    l = Math.sin(s),
                    d = Math.sin(i);
                return "XYZ" === this.axisOrder ? (this.elements[0] = o * a * n + r * l * d, this.elements[1] = r * l * n - o * a * d, this.elements[2] = r * a * d + o * l * n, this.elements[3] = r * a * n - o * l * d) : "YXZ" === this.axisOrder ? (this.elements[0] = o * a * n + r * l * d, this.elements[1] = r * l * n - o * a * d, this.elements[2] = r * a * d - o * l * n, this.elements[3] = r * a * n + o * l * d) : "ZXY" === this.axisOrder ? (this.elements[0] = o * a * n - r * l * d, this.elements[1] = r * l * n + o * a * d, this.elements[2] = r * a * d + o * l * n, this.elements[3] = r * a * n - o * l * d) : "ZYX" === this.axisOrder ? (this.elements[0] = o * a * n - r * l * d, this.elements[1] = r * l * n + o * a * d, this.elements[2] = r * a * d - o * l * n, this.elements[3] = r * a * n + o * l * d) : "YZX" === this.axisOrder ? (this.elements[0] = o * a * n + r * l * d, this.elements[1] = r * l * n + o * a * d, this.elements[2] = r * a * d - o * l * n, this.elements[3] = r * a * n - o * l * d) : "XZY" === this.axisOrder && (this.elements[0] = o * a * n - r * l * d, this.elements[1] = r * l * n - o * a * d, this.elements[2] = r * a * d + o * l * n, this.elements[3] = r * a * n + o * l * d), this
            }
        }
        const F = new E,
            V = new S,
            N = new S,
            B = new S,
            U = new S,
            W = new S,
            G = new S,
            j = new S,
            H = new S,
            X = new D,
            Y = new S(.5, .5, 0),
            q = new S,
            Z = new S,
            K = new S,
            Q = new S,
            J = new E;
        class ee extends O {
            constructor(e, t, {
                widthSegments: s,
                heightSegments: i,
                renderOrder: r,
                depthTest: a,
                cullFace: n,
                uniforms: o,
                vertexShaderID: l,
                fragmentShaderID: d,
                vertexShader: h,
                fragmentShader: c,
                texturesOptions: p,
                crossOrigin: u,
                alwaysDraw: m = !1,
                visible: g = !0,
                transparent: f = !1,
                drawCheckMargins: v = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                autoloadSources: x = !0,
                watchScroll: b = !0,
                fov: w = 50
            } = {}) {
                super(e, t, "Plane", {
                    widthSegments: s,
                    heightSegments: i,
                    renderOrder: r,
                    depthTest: a,
                    cullFace: n,
                    uniforms: o,
                    vertexShaderID: l,
                    fragmentShaderID: d,
                    vertexShader: h,
                    fragmentShader: c,
                    texturesOptions: p,
                    crossOrigin: u
                }), this.gl && (this.index = this.renderer.planes.length, this.target = null, this.alwaysDraw = m, this._shouldDraw = !0, this.visible = g, this._transparent = f, this.drawCheckMargins = v, this.autoloadSources = x, this.watchScroll = b, this._updateMVMatrix = !1, this.camera = new I({
                    fov: w,
                    width: this.renderer._boundingRect.width,
                    height: this.renderer._boundingRect.height,
                    pixelRatio: this.renderer.pixelRatio
                }), this._program.compiled && (this._initPlane(), this.renderer.scene.addPlane(this), this.renderer.planes.push(this)))
            }
            _programRestored() {
                this.target && this.setRenderTarget(this.renderer.renderTargets[this.target.index]), this._initMatrices(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._setWorldSizes(), this._applyWorldPositions(), this.renderer.scene.addPlane(this);
                for (let e = 0; e < this.textures.length; e++) this.textures[e]._parent = this, this.textures[e]._restoreContext();
                this._canDraw = !0
            }
            _initPlane() {
                this._initTransformValues(), this._initPositions(), this.setPerspective(this.camera.fov, this.camera.near, this.camera.far), this._initSources()
            }
            _initTransformValues() {
                this.rotation = new S, this.rotation.onChange((() => this._applyRotation())), this.quaternion = new D, this.relativeTranslation = new S, this.relativeTranslation.onChange((() => this._setTranslation())), this._translation = new S, this.scale = new S(1), this.scale.onChange((() => {
                    this.scale.z = 1, this._applyScale()
                })), this.transformOrigin = new S(.5, .5, 0), this.transformOrigin.onChange((() => {
                    this._setWorldTransformOrigin(), this._updateMVMatrix = !0
                }))
            }
            resetPlane(e) {
                this._initTransformValues(), this._setWorldTransformOrigin(), null !== e && e ? (this.htmlElement = e, this.resize()) : e || this.renderer.production || t(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.")
            }
            removeRenderTarget() {
                this.target && (this.renderer.scene.removePlane(this), this.target = null, this.renderer.scene.addPlane(this))
            }
            _initPositions() {
                this._initMatrices(), this._setWorldSizes(), this._applyWorldPositions()
            }
            _initMatrices() {
                const e = new T;
                this._matrices = {
                    world: {
                        matrix: e
                    },
                    modelView: {
                        name: "uMVMatrix",
                        matrix: e,
                        location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
                    },
                    projection: {
                        name: "uPMatrix",
                        matrix: e,
                        location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
                    },
                    modelViewProjection: {
                        matrix: e
                    }
                }
            }
            _setPerspectiveMatrix() {
                this.camera._shouldUpdate && (this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.projection.location, !1, this._matrices.projection.matrix.elements)), this.camera.cancelUpdate()
            }
            setPerspective(e, t, s) {
                this.camera.setPerspective(e, t, s, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio), this.renderer.state.isContextLost && this.camera.forceUpdate(), this._matrices.projection.matrix = this.camera.projectionMatrix, this.camera._shouldUpdate && (this._setWorldSizes(), this._applyWorldPositions(), this._translation.z = this.relativeTranslation.z / this.camera.CSSPerspective), this._updateMVMatrix = this.camera._shouldUpdate
            }
            _setMVMatrix() {
                this._updateMVMatrix && (this._matrices.world.matrix = this._matrices.world.matrix.composeFromOrigin(this._translation, this.quaternion, this.scale, this._boundingRect.world.transformOrigin), this._matrices.world.matrix.scale({
                    x: this._boundingRect.world.width,
                    y: this._boundingRect.world.height,
                    z: 1
                }), this._matrices.modelView.matrix.copy(this._matrices.world.matrix), this._matrices.modelView.matrix.elements[14] -= this.camera.position.z, this._matrices.modelViewProjection.matrix = this._matrices.projection.matrix.multiply(this._matrices.modelView.matrix), this.alwaysDraw || this._shouldDrawCheck(), this.renderer.useProgram(this._program), this.gl.uniformMatrix4fv(this._matrices.modelView.location, !1, this._matrices.modelView.matrix.elements)), this._updateMVMatrix = !1
            }
            _setWorldTransformOrigin() {
                this._boundingRect.world.transformOrigin = new S((2 * this.transformOrigin.x - 1) * this._boundingRect.world.width, -(2 * this.transformOrigin.y - 1) * this._boundingRect.world.height, this.transformOrigin.z)
            }
            _documentToWorldSpace(e) {
                return N.set(e.x * this.renderer.pixelRatio / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width, -e.y * this.renderer.pixelRatio / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height, e.z)
            }
            _setWorldSizes() {
                const e = this.camera.getScreenRatiosFromFov();
                this._boundingRect.world = {
                    width: this._boundingRect.document.width / this.renderer._boundingRect.width * e.width / 2,
                    height: this._boundingRect.document.height / this.renderer._boundingRect.height * e.height / 2,
                    ratios: e
                }, this._setWorldTransformOrigin()
            }
            _setWorldPosition() {
                const e = this._boundingRect.document.width / 2 + this._boundingRect.document.left,
                    t = this._boundingRect.document.height / 2 + this._boundingRect.document.top,
                    s = this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left,
                    i = this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top;
                this._boundingRect.world.top = (i - t) / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height, this._boundingRect.world.left = (e - s) / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width
            }
            setScale(e) {
                e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.scale).max(F.set(.001, .001)), e.x === this.scale.x && e.y === this.scale.y || (this.scale.set(e.x, e.y, 1), this._applyScale())) : this.renderer.production || t(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e)
            }
            _applyScale() {
                for (let e = 0; e < this.textures.length; e++) this.textures[e].resize();
                this._updateMVMatrix = !0
            }
            setRotation(e) {
                e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.rotation), e.equals(this.rotation) || (this.rotation.copy(e), this._applyRotation())) : this.renderer.production || t(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", e)
            }
            _applyRotation() {
                this.quaternion.setFromVec3(this.rotation), this._updateMVMatrix = !0
            }
            setTransformOrigin(e) {
                e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.transformOrigin), e.equals(this.transformOrigin) || (this.transformOrigin.copy(e), this._setWorldTransformOrigin(), this._updateMVMatrix = !0)) : this.renderer.production || t(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", e)
            }
            _setTranslation() {
                let e = V.set(0, 0, 0);
                this.relativeTranslation.equals(e) || (e = this._documentToWorldSpace(this.relativeTranslation)), this._translation.set(this._boundingRect.world.left + e.x, this._boundingRect.world.top + e.y, this.relativeTranslation.z / this.camera.CSSPerspective), this._updateMVMatrix = !0
            }
            setRelativeTranslation(e) {
                e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.relativeTranslation), e.equals(this.relativeTranslation) || (this.relativeTranslation.copy(e), this._setTranslation())) : this.renderer.production || t(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", e)
            }
            _applyWorldPositions() {
                this._setWorldPosition(), this._setTranslation()
            }
            updatePosition() {
                this._setDocumentSizes(), this._applyWorldPositions()
            }
            updateScrollPosition(e, t) {
                (e || t) && (this._boundingRect.document.top += t * this.renderer.pixelRatio, this._boundingRect.document.left += e * this.renderer.pixelRatio, this._applyWorldPositions())
            }
            _getIntersection(e, t) {
                let s = t.clone().sub(e),
                    i = e.clone();
                for (; i.z > -1;) i.add(s);
                return i
            }
            _getNearPlaneIntersections(e, t, s) {
                const i = this._matrices.modelViewProjection.matrix;
                if (1 === s.length) 0 === s[0] ? (t[0] = this._getIntersection(t[1], j.set(.95, 1, 0).applyMat4(i)), t.push(this._getIntersection(t[3], H.set(-1, -.95, 0).applyMat4(i)))) : 1 === s[0] ? (t[1] = this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(i)), t.push(this._getIntersection(t[2], H.set(1, -.95, 0).applyMat4(i)))) : 2 === s[0] ? (t[2] = this._getIntersection(t[3], j.set(-.95, -1, 0).applyMat4(i)), t.push(this._getIntersection(t[1], H.set(1, .95, 0).applyMat4(i)))) : 3 === s[0] && (t[3] = this._getIntersection(t[2], j.set(.95, -1, 0).applyMat4(i)), t.push(this._getIntersection(t[0], H.set(-1, .95, 0).applyMat4(i))));
                else if (2 === s.length) 0 === s[0] && 1 === s[1] ? (t[0] = this._getIntersection(t[3], j.set(-1, -.95, 0).applyMat4(i)), t[1] = this._getIntersection(t[2], H.set(1, -.95, 0).applyMat4(i))) : 1 === s[0] && 2 === s[1] ? (t[1] = this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(i)), t[2] = this._getIntersection(t[3], H.set(-.95, -1, 0).applyMat4(i))) : 2 === s[0] && 3 === s[1] ? (t[2] = this._getIntersection(t[1], j.set(1, .95, 0).applyMat4(i)), t[3] = this._getIntersection(t[0], H.set(-1, .95, 0).applyMat4(i))) : 0 === s[0] && 3 === s[1] && (t[0] = this._getIntersection(t[1], j.set(.95, 1, 0).applyMat4(i)), t[3] = this._getIntersection(t[2], H.set(.95, -1, 0).applyMat4(i)));
                else if (3 === s.length) {
                    let r = 0;
                    for (let t = 0; t < e.length; t++) s.includes(t) || (r = t);
                    t = [t[r]], 0 === r ? (t.push(this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], H.set(-1, .95, 0).applyMat4(i)))) : 1 === r ? (t.push(this._getIntersection(t[0], j.set(.95, 1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], H.set(1, .95, 0).applyMat4(i)))) : 2 === r ? (t.push(this._getIntersection(t[0], j.set(.95, -1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], H.set(1, -.95, 0).applyMat4(i)))) : 3 === r && (t.push(this._getIntersection(t[0], j.set(-.95, -1, 0).applyMat4(i))), t.push(this._getIntersection(t[0], H.set(-1.95, 0).applyMat4(i))))
                } else
                    for (let s = 0; s < e.length; s++) t[s][0] = 1e4, t[s][1] = 1e4;
                return t
            }
            _getWorldCoords() {
                const e = [B.set(-1, 1, 0), U.set(1, 1, 0), W.set(1, -1, 0), G.set(-1, -1, 0)];
                let t = [],
                    s = [];
                for (let i = 0; i < e.length; i++) {
                    const r = e[i].applyMat4(this._matrices.modelViewProjection.matrix);
                    t.push(r), Math.abs(r.z) > 1 && s.push(i)
                }
                s.length && (t = this._getNearPlaneIntersections(e, t, s));
                let i = 1 / 0,
                    r = -1 / 0,
                    a = 1 / 0,
                    n = -1 / 0;
                for (let e = 0; e < t.length; e++) {
                    const s = t[e];
                    s.x < i && (i = s.x), s.x > r && (r = s.x), s.y < a && (a = s.y), s.y > n && (n = s.y)
                }
                return {
                    top: n,
                    right: r,
                    bottom: a,
                    left: i
                }
            }
            _computeWebGLBoundingRect() {
                const e = this._getWorldCoords();
                let t = {
                    top: 1 - (e.top + 1) / 2,
                    right: (e.right + 1) / 2,
                    bottom: 1 - (e.bottom + 1) / 2,
                    left: (e.left + 1) / 2
                };
                t.width = t.right - t.left, t.height = t.bottom - t.top, this._boundingRect.worldToDocument = {
                    width: t.width * this.renderer._boundingRect.width,
                    height: t.height * this.renderer._boundingRect.height,
                    top: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
                    left: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
                    right: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + t.width * this.renderer._boundingRect.width,
                    bottom: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + t.height * this.renderer._boundingRect.height
                }
            }
            getWebGLBoundingRect() {
                return this._matrices.modelViewProjection ? (this._boundingRect.worldToDocument && !this.alwaysDraw || this._computeWebGLBoundingRect(), this._boundingRect.worldToDocument) : this._boundingRect.document
            }
            _getWebGLDrawRect() {
                return this._computeWebGLBoundingRect(), {
                    top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
                    right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
                    bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
                    left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
                }
            }
            _shouldDrawCheck() {
                const e = this._getWebGLDrawRect();
                Math.round(e.right) <= this.renderer._boundingRect.left || Math.round(e.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(e.bottom) <= this.renderer._boundingRect.top || Math.round(e.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height ? this._shouldDraw && (this._shouldDraw = !1, this.renderer.nextRender.add((() => this._onLeaveViewCallback && this._onLeaveViewCallback()))) : (this._shouldDraw || this.renderer.nextRender.add((() => this._onReEnterViewCallback && this._onReEnterViewCallback())), this._shouldDraw = !0)
            }
            isDrawn() {
                return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
            }
            enableDepthTest(e) {
                this._depthTest = e
            }
            _initSources() {
                let e = 0;
                if (this.autoloadSources) {
                    const t = this.htmlElement.getElementsByTagName("img"),
                        s = this.htmlElement.getElementsByTagName("video"),
                        i = this.htmlElement.getElementsByTagName("canvas");
                    t.length && this.loadImages(t), s.length && this.loadVideos(s), i.length && this.loadCanvases(i), e = t.length + s.length + i.length
                }
                this.loader._setLoaderSize(e), this._canDraw = !0
            }
            _startDrawing() {
                this._canDraw && (this._onRenderCallback && this._onRenderCallback(), this.target ? this.renderer.bindFrameBuffer(this.target) : null === this.renderer.state.scenePassIndex && this.renderer.bindFrameBuffer(null), this._setPerspectiveMatrix(), this._setMVMatrix(), (this.alwaysDraw || this._shouldDraw) && this.visible && this._draw())
            }
            mouseToPlaneCoords(e) {
                if (X.setAxisOrder(this.quaternion.axisOrder), X.equals(this.quaternion) && Y.equals(this.transformOrigin)) return super.mouseToPlaneCoords(e);
                {
                    const t = {
                        x: e.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio) * 2 - 1,
                        y: 2 * (1 - e.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio)) - 1
                    },
                        s = this.camera.position.clone(),
                        i = q.set(t.x, t.y, -.5);
                    i.unproject(this.camera), i.sub(s).normalize();
                    const r = Z.set(0, 0, -1);
                    r.applyQuat(this.quaternion).normalize();
                    const a = Q.set(0, 0, 0),
                        n = r.dot(i);
                    if (Math.abs(n) >= 1e-4) {
                        const e = this._matrices.world.matrix.getInverse().multiply(this.camera.viewMatrix),
                            t = this._boundingRect.world.transformOrigin.clone().add(this._translation),
                            o = K.set(this._translation.x - t.x, this._translation.y - t.y, this._translation.z - t.z);
                        o.applyQuat(this.quaternion), t.add(o);
                        const l = r.dot(t.clone().sub(s)) / n;
                        a.copy(s.add(i.multiplyScalar(l))), a.applyMat4(e)
                    } else a.set(1 / 0, 1 / 0, 1 / 0);
                    return J.set(a.x, a.y)
                }
            }
            onReEnterView(e) {
                return e && (this._onReEnterViewCallback = e), this
            }
            onLeaveView(e) {
                return e && (this._onLeaveViewCallback = e), this
            }
        }

        function te(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function se(e = {}, t = {}) {
            Object.keys(t).forEach((s => {
                void 0 === e[s] ? e[s] = t[s] : te(t[s]) && te(e[s]) && Object.keys(t[s]).length > 0 && se(e[s], t[s])
            }))
        }
        const ie = {
            body: {},
            addEventListener() { },
            removeEventListener() { },
            activeElement: {
                blur() { },
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() { }
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() { },
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function re() {
            const e = "undefined" != typeof document ? document : {};
            return se(e, ie), e
        }
        const ae = {
            document: ie,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() { },
                pushState() { },
                go() { },
                back() { }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() { },
            removeEventListener() { },
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() { },
            Date() { },
            screen: {},
            setTimeout() { },
            clearTimeout() { },
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function ne() {
            const e = "undefined" != typeof window ? window : {};
            return se(e, ae), e
        }
        class oe extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }

        function le(e = []) {
            const t = [];
            return e.forEach((e => {
                Array.isArray(e) ? t.push(...le(e)) : t.push(e)
            })), t
        }

        function de(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function he(e, t) {
            const s = ne(),
                i = re();
            let r = [];
            if (!t && e instanceof oe) return e;
            if (!e) return new oe(r);
            if ("string" == typeof e) {
                const s = e.trim();
                if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                    let e = "div";
                    0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                    const t = i.createElement(e);
                    t.innerHTML = s;
                    for (let e = 0; e < t.childNodes.length; e += 1) r.push(t.childNodes[e])
                } else r = function (e, t) {
                    if ("string" != typeof e) return [e];
                    const s = [],
                        i = t.querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1) s.push(i[e]);
                    return s
                }(e.trim(), t || i)
            } else if (e.nodeType || e === s || e === i) r.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof oe) return e;
                r = e
            }
            return new oe(function (e) {
                const t = [];
                for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                return t
            }(r))
        }
        he.fn = oe.prototype;
        const ce = "resize scroll".split(" ");

        function pe(e) {
            return function (...t) {
                if (void 0 === t[0]) {
                    for (let t = 0; t < this.length; t += 1) ce.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : he(this[t]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }
        pe("click"), pe("blur"), pe("focus"), pe("focusin"), pe("focusout"), pe("keyup"), pe("keydown"), pe("keypress"), pe("submit"), pe("change"), pe("mousedown"), pe("mousemove"), pe("mouseup"), pe("mouseenter"), pe("mouseleave"), pe("mouseout"), pe("mouseover"), pe("touchstart"), pe("touchend"), pe("touchmove"), pe("resize"), pe("scroll");
        const ue = {
            addClass: function (...e) {
                const t = le(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.add(...t)
                })), this
            },
            removeClass: function (...e) {
                const t = le(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.remove(...t)
                })), this
            },
            hasClass: function (...e) {
                const t = le(e.map((e => e.split(" "))));
                return de(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
            },
            toggleClass: function (...e) {
                const t = le(e.map((e => e.split(" "))));
                this.forEach((e => {
                    t.forEach((t => {
                        e.classList.toggle(t)
                    }))
                }))
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let s = 0; s < this.length; s += 1)
                    if (2 === arguments.length) this[s].setAttribute(e, t);
                    else
                        for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                return this
            },
            removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            transform: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            },
            transition: function (e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            },
            on: function (...e) {
                let [t, s, i, r] = e;

                function a(e) {
                    const t = e.target;
                    if (!t) return;
                    const r = e.target.dom7EventData || [];
                    if (r.indexOf(e) < 0 && r.unshift(e), he(t).is(s)) i.apply(t, r);
                    else {
                        const e = he(t).parents();
                        for (let t = 0; t < e.length; t += 1) he(e[t]).is(s) && i.apply(e[t], r)
                    }
                }

                function n(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
                }
                "function" == typeof e[1] && ([t, i, r] = e, s = void 0), r || (r = !1);
                const o = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (s)
                        for (l = 0; l < o.length; l += 1) {
                            const e = o[l];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                                listener: i,
                                proxyListener: a
                            }), t.addEventListener(e, a, r)
                        } else
                        for (l = 0; l < o.length; l += 1) {
                            const e = o[l];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: i,
                                proxyListener: n
                            }), t.addEventListener(e, n, r)
                        }
                }
                return this
            },
            off: function (...e) {
                let [t, s, i, r] = e;
                "function" == typeof e[1] && ([t, i, r] = e, s = void 0), r || (r = !1);
                const a = t.split(" ");
                for (let e = 0; e < a.length; e += 1) {
                    const t = a[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const a = this[e];
                        let n;
                        if (!s && a.dom7Listeners ? n = a.dom7Listeners[t] : s && a.dom7LiveListeners && (n = a.dom7LiveListeners[t]), n && n.length)
                            for (let e = n.length - 1; e >= 0; e -= 1) {
                                const s = n[e];
                                i && s.listener === i || i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i ? (a.removeEventListener(t, s.proxyListener, r), n.splice(e, 1)) : i || (a.removeEventListener(t, s.proxyListener, r), n.splice(e, 1))
                            }
                    }
                }
                return this
            },
            trigger: function (...e) {
                const t = ne(),
                    s = e[0].split(" "),
                    i = e[1];
                for (let r = 0; r < s.length; r += 1) {
                    const a = s[r];
                    for (let s = 0; s < this.length; s += 1) {
                        const r = this[s];
                        if (t.CustomEvent) {
                            const s = new t.CustomEvent(a, {
                                detail: i,
                                bubbles: !0,
                                cancelable: !0
                            });
                            r.dom7EventData = e.filter(((e, t) => t > 0)), r.dispatchEvent(s), r.dom7EventData = [], delete r.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function (e) {
                const t = this;
                return e && t.on("transitionend", (function s(i) {
                    i.target === this && (e.call(this, i), t.off("transitionend", s))
                })), this
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function () {
                const e = ne();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function () {
                if (this.length > 0) {
                    const e = ne(),
                        t = re(),
                        s = this[0],
                        i = s.getBoundingClientRect(),
                        r = t.body,
                        a = s.clientTop || r.clientTop || 0,
                        n = s.clientLeft || r.clientLeft || 0,
                        o = s === e ? e.scrollY : s.scrollTop,
                        l = s === e ? e.scrollX : s.scrollLeft;
                    return {
                        top: i.top + o - a,
                        left: i.left + l - n
                    }
                }
                return null
            },
            css: function (e, t) {
                const s = ne();
                let i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1)
                            for (const t in e) this[i].style[t] = e[t];
                        return this
                    }
                    if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                }
                return this
            },
            each: function (e) {
                return e ? (this.forEach(((t, s) => {
                    e.apply(t, [t, s])
                })), this) : this
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function (e) {
                const t = ne(),
                    s = re(),
                    i = this[0];
                let r, a;
                if (!i || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (i.matches) return i.matches(e);
                    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                    if (i.msMatchesSelector) return i.msMatchesSelector(e);
                    for (r = he(e), a = 0; a < r.length; a += 1)
                        if (r[a] === i) return !0;
                    return !1
                }
                if (e === s) return i === s;
                if (e === t) return i === t;
                if (e.nodeType || e instanceof oe) {
                    for (r = e.nodeType ? [e] : e, a = 0; a < r.length; a += 1)
                        if (r[a] === i) return !0;
                    return !1
                }
                return !1
            },
            index: function () {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return he([]);
                if (e < 0) {
                    const s = t + e;
                    return he(s < 0 ? [] : [this[s]])
                }
                return he([this[e]])
            },
            append: function (...e) {
                let t;
                const s = re();
                for (let i = 0; i < e.length; i += 1) {
                    t = e[i];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const i = s.createElement("div");
                            for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                        } else if (t instanceof oe)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t)
                }
                return this
            },
            prepend: function (e) {
                const t = re();
                let s, i;
                for (s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const r = t.createElement("div");
                        for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(r.childNodes[i], this[s].childNodes[0])
                    } else if (e instanceof oe)
                        for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                return this
            },
            next: function (e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && he(this[0].nextElementSibling).is(e) ? he([this[0].nextElementSibling]) : he([]) : this[0].nextElementSibling ? he([this[0].nextElementSibling]) : he([]) : he([])
            },
            nextAll: function (e) {
                const t = [];
                let s = this[0];
                if (!s) return he([]);
                for (; s.nextElementSibling;) {
                    const i = s.nextElementSibling;
                    e ? he(i).is(e) && t.push(i) : t.push(i), s = i
                }
                return he(t)
            },
            prev: function (e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && he(t.previousElementSibling).is(e) ? he([t.previousElementSibling]) : he([]) : t.previousElementSibling ? he([t.previousElementSibling]) : he([])
                }
                return he([])
            },
            prevAll: function (e) {
                const t = [];
                let s = this[0];
                if (!s) return he([]);
                for (; s.previousElementSibling;) {
                    const i = s.previousElementSibling;
                    e ? he(i).is(e) && t.push(i) : t.push(i), s = i
                }
                return he(t)
            },
            parent: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? he(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                return he(t)
            },
            parents: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    let i = this[s].parentNode;
                    for (; i;) e ? he(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
                }
                return he(t)
            },
            closest: function (e) {
                let t = this;
                return void 0 === e ? he([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].querySelectorAll(e);
                    for (let e = 0; e < i.length; e += 1) t.push(i[e])
                }
                return he(t)
            },
            children: function (e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s].children;
                    for (let s = 0; s < i.length; s += 1) e && !he(i[s]).is(e) || t.push(i[s])
                }
                return he(t)
            },
            filter: function (e) {
                return he(de(this, e))
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        Object.keys(ue).forEach((e => {
            Object.defineProperty(he.fn, e, {
                value: ue[e],
                writable: !0
            })
        }));
        const me = he;

        function ge(e, t = 0) {
            return setTimeout(e, t)
        }

        function fe() {
            return Date.now()
        }

        function ve(e, t = "x") {
            const s = ne();
            let i, r, a;
            const n = function (e) {
                const t = ne();
                let s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
            }(e);
            return s.WebKitCSSMatrix ? (r = n.transform || n.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
        }

        function xe(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function be(...e) {
            const t = Object(e[0]),
                s = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < e.length; r += 1) {
                const a = e[r];
                if (null != a && (i = a, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                    const e = Object.keys(Object(a)).filter((e => s.indexOf(e) < 0));
                    for (let s = 0, i = e.length; s < i; s += 1) {
                        const i = e[s],
                            r = Object.getOwnPropertyDescriptor(a, i);
                        void 0 !== r && r.enumerable && (xe(t[i]) && xe(a[i]) ? a[i].__swiper__ ? t[i] = a[i] : be(t[i], a[i]) : !xe(t[i]) && xe(a[i]) ? (t[i] = {}, a[i].__swiper__ ? t[i] = a[i] : be(t[i], a[i])) : t[i] = a[i])
                    }
                }
            }
            var i;
            return t
        }

        function we(e, t, s) {
            e.style.setProperty(t, s)
        }

        function ye({
            swiper: e,
            targetPosition: t,
            side: s
        }) {
            const i = ne(),
                r = -e.translate;
            let a, n = null;
            const o = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
            const l = t > r ? "next" : "prev",
                d = (e, t) => "next" === l && e >= t || "prev" === l && e <= t,
                h = () => {
                    a = (new Date).getTime(), null === n && (n = a);
                    const l = Math.max(Math.min((a - n) / o, 1), 0),
                        c = .5 - Math.cos(l * Math.PI) / 2;
                    let p = r + c * (t - r);
                    if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                        [s]: p
                    }), d(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                            [s]: p
                        })
                    })), void i.cancelAnimationFrame(e.cssModeFrameID);
                    e.cssModeFrameID = i.requestAnimationFrame(h)
                };
            h()
        }
        let _e, Te, Ee;

        function Se() {
            return _e || (_e = function () {
                const e = ne(),
                    t = re();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function () {
                        let t = !1;
                        try {
                            const s = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, s)
                        } catch (e) { }
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), _e
        }
        const Ce = {
            on(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const r = s ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                })), i
            },
            once(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;

                function r(...s) {
                    i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, s)
                }
                return r.__emitterProxy = t, i.on(e, r, s)
            },
            onAny(e, t) {
                const s = this;
                if (!s.eventsListeners || s.destroyed) return s;
                if ("function" != typeof e) return s;
                const i = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
            },
            off(e, t) {
                const s = this;
                return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
                    }))
                })), s) : s
            },
            emit(...e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsListeners) return t;
                let s, i, r;
                return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), r = t) : (s = e[0].events, i = e[0].data, r = e[0].context || t), i.unshift(r), (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                        t.apply(r, [e, ...i])
                    })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                        e.apply(r, i)
                    }))
                })), t
            }
        },
            Me = {
                updateSize: function () {
                    const e = this;
                    let t, s;
                    const i = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function () {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const i = e.params,
                        {
                            $wrapperEl: r,
                            size: a,
                            rtlTranslate: n,
                            wrongRTL: o
                        } = e,
                        l = e.virtual && i.virtual.enabled,
                        d = l ? e.virtual.slides.length : e.slides.length,
                        h = r.children(`.${e.params.slideClass}`),
                        c = l ? e.virtual.slides.length : h.length;
                    let p = [];
                    const u = [],
                        m = [];
                    let g = i.slidesOffsetBefore;
                    "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
                    let f = i.slidesOffsetAfter;
                    "function" == typeof f && (f = i.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        x = e.slidesGrid.length;
                    let b = i.spaceBetween,
                        w = -g,
                        y = 0,
                        _ = 0;
                    if (void 0 === a) return;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * a), e.virtualSize = -b, n ? h.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : h.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), i.centeredSlides && i.cssMode && (we(e.wrapperEl, "--swiper-centered-offset-before", ""), we(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const T = i.grid && i.grid.rows > 1 && e.grid;
                    let E;
                    T && e.grid.initSlides(c);
                    const S = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => void 0 !== i.breakpoints[e].slidesPerView)).length > 0;
                    for (let r = 0; r < c; r += 1) {
                        E = 0;
                        const n = h.eq(r);
                        if (T && e.grid.updateSlide(r, n, c, t), "none" !== n.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                S && (h[r].style[t("width")] = "");
                                const a = getComputedStyle(n[0]),
                                    o = n[0].style.transform,
                                    l = n[0].style.webkitTransform;
                                if (o && (n[0].style.transform = "none"), l && (n[0].style.webkitTransform = "none"), i.roundLengths) E = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else {
                                    const e = s(a, "width"),
                                        t = s(a, "padding-left"),
                                        i = s(a, "padding-right"),
                                        r = s(a, "margin-left"),
                                        o = s(a, "margin-right"),
                                        l = a.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) E = e + r + o;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: a
                                        } = n[0];
                                        E = e + t + i + r + o + (a - s)
                                    }
                                }
                                o && (n[0].style.transform = o), l && (n[0].style.webkitTransform = l), i.roundLengths && (E = Math.floor(E))
                            } else E = (a - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (E = Math.floor(E)), h[r] && (h[r].style[t("width")] = `${E}px`);
                            h[r] && (h[r].swiperSlideSize = E), m.push(E), i.centeredSlides ? (w = w + E / 2 + y / 2 + b, 0 === y && 0 !== r && (w = w - a / 2 - b), 0 === r && (w = w - a / 2 - b), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), _ % i.slidesPerGroup == 0 && p.push(w), u.push(w)) : (i.roundLengths && (w = Math.floor(w)), (_ - Math.min(e.params.slidesPerGroupSkip, _)) % e.params.slidesPerGroup == 0 && p.push(w), u.push(w), w = w + E + b), e.virtualSize += E + b, y = E, _ += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, a) + f, n && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({
                        width: `${e.virtualSize + i.spaceBetween}px`
                    }), i.setWrapperSize && r.css({
                        [t("width")]: `${e.virtualSize + i.spaceBetween}px`
                    }), T && e.grid.updateWrapperSize(E, p, t), !i.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < p.length; s += 1) {
                            let r = p[s];
                            i.roundLengths && (r = Math.floor(r)), p[s] <= e.virtualSize - a && t.push(r)
                        }
                        p = t, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
                    }
                    if (0 === p.length && (p = [0]), 0 !== i.spaceBetween) {
                        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                        h.filter(((e, t) => !i.cssMode || t !== h.length - 1)).css({
                            [s]: `${b}px`
                        })
                    }
                    if (i.centeredSlides && i.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach((t => {
                            e += t + (i.spaceBetween ? i.spaceBetween : 0)
                        })), e -= i.spaceBetween;
                        const t = e - a;
                        p = p.map((e => e < 0 ? -g : e > t ? t + f : e))
                    }
                    if (i.centerInsufficientSlides) {
                        let e = 0;
                        if (m.forEach((t => {
                            e += t + (i.spaceBetween ? i.spaceBetween : 0)
                        })), e -= i.spaceBetween, e < a) {
                            const t = (a - e) / 2;
                            p.forEach(((e, s) => {
                                p[s] = e - t
                            })), u.forEach(((e, s) => {
                                u[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                        slides: h,
                        snapGrid: p,
                        slidesGrid: u,
                        slidesSizesGrid: m
                    }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                        we(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), we(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (c !== d && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), u.length !== x && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                        const t = `${i.containerModifierClass}backface-hidden`,
                            s = e.$el.hasClass(t);
                        c <= i.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function (e) {
                    const t = this,
                        s = [],
                        i = t.virtual && t.params.virtual.enabled;
                    let r, a = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const n = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) (t.visibleSlides || me([])).each((e => {
                            s.push(e)
                        }));
                        else
                            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                                const e = t.activeIndex + r;
                                if (e > t.slides.length && !i) break;
                                s.push(n(e))
                            } else s.push(n(t.activeIndex));
                    for (r = 0; r < s.length; r += 1)
                        if (void 0 !== s[r]) {
                            const e = s[r].offsetHeight;
                            a = e > a ? e : a
                        } (a || 0 === a) && t.$wrapperEl.css("height", `${a}px`)
                },
                updateSlidesOffset: function () {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function (e = this && this.translate || 0) {
                    const t = this,
                        s = t.params,
                        {
                            slides: i,
                            rtlTranslate: r,
                            snapGrid: a
                        } = t;
                    if (0 === i.length) return;
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    let n = -e;
                    r && (n = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < i.length; e += 1) {
                        const o = i[e];
                        let l = o.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
                        const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + s.spaceBetween),
                            h = (n - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + s.spaceBetween),
                            c = -(n - l),
                            p = c + t.slidesSizesGrid[e];
                        (c >= 0 && c < t.size - 1 || p > 1 && p <= t.size || c <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(s.slideVisibleClass)), o.progress = r ? -d : d, o.originalProgress = r ? -h : h
                    }
                    t.visibleSlides = me(t.visibleSlides)
                },
                updateProgress: function (e) {
                    const t = this;
                    if (void 0 === e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        i = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: r,
                        isBeginning: a,
                        isEnd: n
                    } = t;
                    const o = a,
                        l = n;
                    0 === i ? (r = 0, a = !0, n = !0) : (r = (e - t.minTranslate()) / i, a = r <= 0, n = r >= 1), Object.assign(t, {
                        progress: r,
                        isBeginning: a,
                        isEnd: n
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !a || l && !n) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function () {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: i,
                            activeIndex: r,
                            realIndex: a
                        } = e,
                        n = e.virtual && s.virtual.enabled;
                    let o;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), o = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r), o.addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass));
                    let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === l.length && (l = t.eq(0), l.addClass(s.slideNextClass));
                    let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: i,
                            snapGrid: r,
                            params: a,
                            activeIndex: n,
                            realIndex: o,
                            snapIndex: l
                        } = t;
                    let d, h = e;
                    if (void 0 === h) {
                        for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? h = e : s >= i[e] && s < i[e + 1] && (h = e + 1) : s >= i[e] && (h = e);
                        a.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
                    }
                    if (r.indexOf(s) >= 0) d = r.indexOf(s);
                    else {
                        const e = Math.min(a.slidesPerGroupSkip, h);
                        d = e + Math.floor((h - e) / a.slidesPerGroup)
                    }
                    if (d >= r.length && (d = r.length - 1), h === n) return void (d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const c = parseInt(t.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: c,
                        previousIndex: n,
                        activeIndex: h
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== c && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function (e) {
                    const t = this,
                        s = t.params,
                        i = me(e).closest(`.${s.slideClass}`)[0];
                    let r, a = !1;
                    if (i)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === i) {
                                a = !0, r = e;
                                break
                            } if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(me(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };

        function Pe({
            swiper: e,
            runCallbacks: t,
            direction: s,
            step: i
        }) {
            const {
                activeIndex: r,
                previousIndex: a
            } = e;
            let n = s;
            if (n || (n = r > a ? "next" : r < a ? "prev" : "reset"), e.emit(`transition${i}`), t && r !== a) {
                if ("reset" === n) return void e.emit(`slideResetTransition${i}`);
                e.emit(`slideChangeTransition${i}`), "next" === n ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
            }
        }
        const Re = {
            slideTo: function (e = 0, t = this.params.speed, s = !0, i, r) {
                if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const a = this;
                let n = e;
                n < 0 && (n = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: d,
                    previousIndex: h,
                    activeIndex: c,
                    rtlTranslate: p,
                    wrapperEl: u,
                    enabled: m
                } = a;
                if (a.animating && o.preventInteractionOnTransition || !m && !i && !r) return !1;
                const g = Math.min(a.params.slidesPerGroupSkip, n);
                let f = g + Math.floor((n - g) / a.params.slidesPerGroup);
                f >= l.length && (f = l.length - 1);
                const v = -l[f];
                if (o.normalizeSlideIndex)
                    for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * v),
                            s = Math.floor(100 * d[e]),
                            i = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? n = e : t >= s && t < i && (n = e + 1) : t >= s && (n = e)
                    }
                if (a.initialized && n !== c) {
                    if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (c || 0) !== n) return !1
                }
                let x;
                if (n !== (h || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(v), x = n > c ? "next" : n < c ? "prev" : "reset", p && -v === a.translate || !p && v === a.translate) return a.updateActiveIndex(n), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(v), "reset" !== x && (a.transitionStart(s, x), a.transitionEnd(s, x)), !1;
                if (o.cssMode) {
                    const e = a.isHorizontal(),
                        s = p ? v : -v;
                    if (0 === t) {
                        const t = a.virtual && a.params.virtual.enabled;
                        t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), u[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                            a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
                        }))
                    } else {
                        if (!a.support.smoothScroll) return ye({
                            swiper: a,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }), !0;
                        u.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, x), 0 === t ? a.transitionEnd(s, x) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, x))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const r = this;
                let a = e;
                return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, s, i)
            },
            slideNext: function (e = this.params.speed, t = !0, s) {
                const i = this,
                    {
                        animating: r,
                        enabled: a,
                        params: n
                    } = i;
                if (!a) return i;
                let o = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o;
                if (n.loop) {
                    if (r && n.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s)
            },
            slidePrev: function (e = this.params.speed, t = !0, s) {
                const i = this,
                    {
                        params: r,
                        animating: a,
                        snapGrid: n,
                        slidesGrid: o,
                        rtlTranslate: l,
                        enabled: d
                    } = i;
                if (!d) return i;
                if (r.loop) {
                    if (a && r.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }

                function h(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const c = h(l ? i.translate : -i.translate),
                    p = n.map((e => h(e)));
                let u = n[p.indexOf(c) - 1];
                if (void 0 === u && r.cssMode) {
                    let e;
                    n.forEach(((t, s) => {
                        c >= t && (e = s)
                    })), void 0 !== e && (u = n[e > 0 ? e - 1 : e])
                }
                let m = 0;
                if (void 0 !== u && (m = o.indexOf(u), m < 0 && (m = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), r.rewind && i.isBeginning) {
                    const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(r, e, t, s)
                }
                return i.slideTo(m, e, t, s)
            },
            slideReset: function (e = this.params.speed, t = !0, s) {
                return this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function (e = this.params.speed, t = !0, s, i = .5) {
                const r = this;
                let a = r.activeIndex;
                const n = Math.min(r.params.slidesPerGroupSkip, a),
                    o = n + Math.floor((a - n) / r.params.slidesPerGroup),
                    l = r.rtlTranslate ? r.translate : -r.translate;
                if (l >= r.snapGrid[o]) {
                    const e = r.snapGrid[o];
                    l - e > (r.snapGrid[o + 1] - e) * i && (a += r.params.slidesPerGroup)
                } else {
                    const e = r.snapGrid[o - 1];
                    l - e <= (r.snapGrid[o] - e) * i && (a -= r.params.slidesPerGroup)
                }
                return a = Math.max(a, 0), a = Math.min(a, r.slidesGrid.length - 1), r.slideTo(a, e, t, s)
            },
            slideToClickedSlide: function () {
                const e = this,
                    {
                        params: t,
                        $wrapperEl: s
                    } = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let r, a = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    r = parseInt(me(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), ge((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), ge((() => {
                        e.slideTo(a)
                    }))) : e.slideTo(a)
                } else e.slideTo(a)
            }
        };

        function $e(e) {
            const t = this,
                s = re(),
                i = ne(),
                r = t.touchEventsData,
                {
                    params: a,
                    touches: n,
                    enabled: o
                } = t;
            if (!o) return;
            if (t.animating && a.preventInteractionOnTransition) return;
            !t.animating && a.cssMode && a.loop && t.loopFix();
            let l = e;
            l.originalEvent && (l = l.originalEvent);
            let d = me(l.target);
            if ("wrapper" === a.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
            if (r.isTouchEvent = "touchstart" === l.type, !r.isTouchEvent && "which" in l && 3 === l.which) return;
            if (!r.isTouchEvent && "button" in l && l.button > 0) return;
            if (r.isTouched && r.isMoved) return;
            const h = !!a.noSwipingClass && "" !== a.noSwipingClass,
                c = e.composedPath ? e.composedPath() : e.path;
            h && l.target && l.target.shadowRoot && c && (d = me(c[0]));
            const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                u = !(!l.target || !l.target.shadowRoot);
            if (a.noSwiping && (u ? function (e, t = this) {
                return function t(s) {
                    if (!s || s === re() || s === ne()) return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const i = s.closest(e);
                    return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                }(t)
            }(p, d[0]) : d.closest(p)[0])) return void (t.allowClick = !0);
            if (a.swipeHandler && !d.closest(a.swipeHandler)[0]) return;
            n.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, n.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
            const m = n.currentX,
                g = n.currentY,
                f = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                v = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
            if (f && (m <= v || m >= i.innerWidth - v)) {
                if ("prevent" !== f) return;
                e.preventDefault()
            }
            if (Object.assign(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), n.startX = m, n.startY = g, r.touchStartTime = fe(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== l.type) {
                let e = !0;
                d.is(r.focusableElements) && (e = !1, "SELECT" === d[0].nodeName && (r.isTouched = !1)), s.activeElement && me(s.activeElement).is(r.focusableElements) && s.activeElement !== d[0] && s.activeElement.blur();
                const i = e && t.allowTouchMove && a.touchStartPreventDefault;
                !a.touchStartForcePreventDefault && !i || d[0].isContentEditable || l.preventDefault()
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
        }

        function ke(e) {
            const t = re(),
                s = this,
                i = s.touchEventsData,
                {
                    params: r,
                    touches: a,
                    rtlTranslate: n,
                    enabled: o
                } = s;
            if (!o) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", l));
            if (i.isTouchEvent && "touchmove" !== l.type) return;
            const d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                h = "touchmove" === l.type ? d.pageX : l.pageX,
                c = "touchmove" === l.type ? d.pageY : l.pageY;
            if (l.preventedByNestedSwiper) return a.startX = h, void (a.startY = c);
            if (!s.allowTouchMove) return me(l.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(a, {
                startX: h,
                startY: c,
                currentX: h,
                currentY: c
            }), i.touchStartTime = fe()));
            if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                if (s.isVertical()) {
                    if (c < a.startY && s.translate <= s.maxTranslate() || c > a.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                } else if (h < a.startX && s.translate <= s.maxTranslate() || h > a.startX && s.translate >= s.minTranslate()) return;
            if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && me(l.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
            if (i.allowTouchCallbacks && s.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
            a.currentX = h, a.currentY = c;
            const p = a.currentX - a.startX,
                u = a.currentY - a.startY;
            if (s.params.threshold && Math.sqrt(p ** 2 + u ** 2) < s.params.threshold) return;
            if (void 0 === i.isScrolling) {
                let e;
                s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (e = 180 * Math.atan2(Math.abs(u), Math.abs(p)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
            }
            if (i.isScrolling && s.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
            if (!i.startMoving) return;
            s.allowClick = !1, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", l)), s.emit("sliderMove", l), i.isMoved = !0;
            let m = s.isHorizontal() ? p : u;
            a.diff = m, m *= r.touchRatio, n && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
            let g = !0,
                f = r.resistanceRatio;
            if (r.touchReleaseOnEdges && (f = 0), m > 0 && i.currentTranslate > s.minTranslate() ? (g = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** f)) : m < 0 && i.currentTranslate < s.maxTranslate() && (g = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** f)), g && (l.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            }
            r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
        }

        function Le(e) {
            const t = this,
                s = t.touchEventsData,
                {
                    params: i,
                    touches: r,
                    rtlTranslate: a,
                    slidesGrid: n,
                    enabled: o
                } = t;
            if (!o) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", l), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
            i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const d = fe(),
                h = d - s.touchStartTime;
            if (t.allowClick) {
                const e = l.path || l.composedPath && l.composedPath();
                t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), h < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
            }
            if (s.lastClickTime = fe(), ge((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
            let c;
            if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, c = i.followFinger ? a ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
            if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
                currentPos: c
            });
            let p = 0,
                u = t.slidesSizesGrid[0];
            for (let e = 0; e < n.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                void 0 !== n[e + t] ? c >= n[e] && c < n[e + t] && (p = e, u = n[e + t] - n[e]) : c >= n[e] && (p = e, u = n[n.length - 1] - n[n.length - 2])
            }
            let m = null,
                g = null;
            i.rewind && (t.isBeginning ? g = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
            const f = (c - n[p]) / u,
                v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (h > i.longSwipesMs) {
                if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (f >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? m : p + v) : t.slideTo(p)), "prev" === t.swipeDirection && (f > 1 - i.longSwipesRatio ? t.slideTo(p + v) : null !== g && f < 0 && Math.abs(f) > i.longSwipesRatio ? t.slideTo(g) : t.slideTo(p))
            } else {
                if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== m ? m : p + v), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p)) : l.target === t.navigation.nextEl ? t.slideTo(p + v) : t.slideTo(p)
            }
        }

        function ze() {
            const e = this,
                {
                    params: t,
                    el: s
                } = e;
            if (s && 0 === s.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {
                allowSlideNext: i,
                allowSlidePrev: r,
                snapGrid: a
            } = e;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }

        function Ae(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function Oe() {
            const e = this,
                {
                    wrapperEl: t,
                    rtlTranslate: s,
                    enabled: i
                } = e;
            if (!i) return;
            let r;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const a = e.maxTranslate() - e.minTranslate();
            r = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }
        let Ie = !1;

        function De() { }
        const Fe = (e, t) => {
            const s = re(),
                {
                    params: i,
                    touchEvents: r,
                    el: a,
                    wrapperEl: n,
                    device: o,
                    support: l
                } = e,
                d = !!i.nested,
                h = "on" === t ? "addEventListener" : "removeEventListener",
                c = t;
            if (l.touch) {
                const t = !("touchstart" !== r.start || !l.passiveListener || !i.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                a[h](r.start, e.onTouchStart, t), a[h](r.move, e.onTouchMove, l.passiveListener ? {
                    passive: !1,
                    capture: d
                } : d), a[h](r.end, e.onTouchEnd, t), r.cancel && a[h](r.cancel, e.onTouchEnd, t)
            } else a[h](r.start, e.onTouchStart, !1), s[h](r.move, e.onTouchMove, d), s[h](r.end, e.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && a[h]("click", e.onClick, !0), i.cssMode && n[h]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ze, !0) : e[c]("observerUpdate", ze, !0)
        },
            Ve = {
                attachEvents: function () {
                    const e = this,
                        t = re(),
                        {
                            params: s,
                            support: i
                        } = e;
                    e.onTouchStart = $e.bind(e), e.onTouchMove = ke.bind(e), e.onTouchEnd = Le.bind(e), s.cssMode && (e.onScroll = Oe.bind(e)), e.onClick = Ae.bind(e), i.touch && !Ie && (t.addEventListener("touchstart", De), Ie = !0), Fe(e, "on")
                },
                detachEvents: function () {
                    Fe(this, "off")
                }
            },
            Ne = (e, t) => e.grid && t.grid && t.grid.rows > 1,
            Be = {
                addClasses: function () {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: i,
                            $el: r,
                            device: a,
                            support: n
                        } = e,
                        o = function (e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((i => {
                                    e[i] && s.push(t + i)
                                })) : "string" == typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !n.touch
                        }, {
                                "free-mode": e.params.freeMode && s.freeMode.enabled
                            }, {
                                autoheight: s.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: s.grid && s.grid.rows > 1
                            }, {
                                "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                            }, {
                                android: a.android
                            }, {
                                ios: a.ios
                            }, {
                                "css-mode": s.cssMode
                            }, {
                                centered: s.cssMode && s.centeredSlides
                            }, {
                                "watch-progress": s.watchSlidesProgress
                            }], s.containerModifierClass);
                    t.push(...o), r.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function () {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            Ue = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

        function We(e, t) {
            return function (s = {}) {
                const i = Object.keys(s)[0],
                    r = s[i];
                "object" == typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                    auto: !0
                }), i in e && "enabled" in r ? (!0 === e[i] && (e[i] = {
                    enabled: !0
                }), "object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                    enabled: !1
                }), be(t, s)) : be(t, s)) : be(t, s)
            }
        }
        const Ge = {
            eventsEmitter: Ce,
            update: Me,
            translate: {
                getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: i,
                        $wrapperEl: r
                    } = this;
                    if (t.virtualTranslate) return s ? -i : i;
                    if (t.cssMode) return i;
                    let a = ve(r[0], e);
                    return s && (a = -a), a || 0
                },
                setTranslate: function (e, t) {
                    const s = this,
                        {
                            rtlTranslate: i,
                            params: r,
                            $wrapperEl: a,
                            wrapperEl: n,
                            progress: o
                        } = s;
                    let l, d = 0,
                        h = 0;
                    s.isHorizontal() ? d = i ? -e : e : h = e, r.roundLengths && (d = Math.floor(d), h = Math.floor(h)), r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -h : r.virtualTranslate || a.transform(`translate3d(${d}px, ${h}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : h;
                    const c = s.maxTranslate() - s.minTranslate();
                    l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, r) {
                    const a = this,
                        {
                            params: n,
                            wrapperEl: o
                        } = a;
                    if (a.animating && n.preventInteractionOnTransition) return !1;
                    const l = a.minTranslate(),
                        d = a.maxTranslate();
                    let h;
                    if (h = i && e > l ? l : i && e < d ? d : e, a.updateProgress(h), n.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -h;
                        else {
                            if (!a.support.smoothScroll) return ye({
                                swiper: a,
                                targetPosition: -h,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -h,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(h), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(h), s && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, s && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                },
                transitionStart: function (e = !0, t) {
                    const s = this,
                        {
                            params: i
                        } = s;
                    i.cssMode || (i.autoHeight && s.updateAutoHeight(), Pe({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function (e = !0, t) {
                    const s = this,
                        {
                            params: i
                        } = s;
                    s.animating = !1, i.cssMode || (s.setTransition(0), Pe({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: Re,
            loop: {
                loopCreate: function () {
                    const e = this,
                        t = re(),
                        {
                            params: s,
                            $wrapperEl: i
                        } = e,
                        r = i.children().length > 0 ? me(i.children()[0].parentNode) : i;
                    r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let a = r.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - a.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = me(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                r.append(e)
                            }
                            a = r.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                    const n = [],
                        o = [];
                    a.each(((e, t) => {
                        me(e).attr("data-swiper-slide-index", t)
                    }));
                    for (let t = 0; t < e.loopedSlides; t += 1) {
                        const e = t - Math.floor(t / a.length) * a.length;
                        o.push(a.eq(e)[0]), n.unshift(a.eq(a.length - e - 1)[0])
                    }
                    for (let e = 0; e < o.length; e += 1) r.append(me(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let e = n.length - 1; e >= 0; e -= 1) r.prepend(me(n[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function () {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: i,
                        allowSlidePrev: r,
                        allowSlideNext: a,
                        snapGrid: n,
                        rtlTranslate: o
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -n[t] - e.getTranslate();
                    t < i ? (l = s.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)) : t >= s.length - i && (l = -s.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)), e.allowSlidePrev = r, e.allowSlideNext = a, e.emit("loopFix")
                },
                loopDestroy: function () {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function () {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: Ve,
            breakpoints: {
                setBreakpoint: function () {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: i = 0,
                            params: r,
                            $el: a
                        } = e,
                        n = r.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const o = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in n ? n[o] : void 0) || e.originalParams,
                        d = Ne(e, r),
                        h = Ne(e, l),
                        c = r.enabled;
                    d && !h ? (a.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && h && (a.addClass(`${r.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && a.addClass(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = r[t] && r[t].enabled,
                            i = l[t] && l[t].enabled;
                        s && !i && e[t].disable(), !s && i && e[t].enable()
                    }));
                    const p = l.direction && l.direction !== r.direction,
                        u = r.loop && (l.slidesPerView !== r.slidesPerView || p);
                    p && s && e.changeDirection(), be(e.params, l);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), u && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function (e, t = "window", s) {
                    if (!e || "container" === t && !s) return;
                    let i = !1;
                    const r = ne(),
                        a = "window" === t ? r.innerHeight : s.clientHeight,
                        n = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: a * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    n.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < n.length; e += 1) {
                        const {
                            point: a,
                            value: o
                        } = n[e];
                        "window" === t ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = a) : o <= s.clientWidth && (i = a)
                    }
                    return i || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: i
                        } = s;
                    if (i) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: Be,
            images: {
                loadImage: function (e, t, s, i, r, a) {
                    const n = ne();
                    let o;

                    function l() {
                        a && a()
                    }
                    me(e).parent("picture")[0] || e.complete && r ? l() : t ? (o = new n.Image, o.onload = l, o.onerror = l, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : l()
                },
                preloadImages: function () {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const i = e.imagesToLoad[s];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
            je = {};
        class He {
            constructor(...e) {
                let t, s;
                if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = be({}, s), t && !s.el && (s.el = t), s.el && me(s.el).length > 1) {
                    const e = [];
                    return me(s.el).each((t => {
                        const i = be({}, s, {
                            el: t
                        });
                        e.push(new He(i))
                    })), e
                }
                const i = this;
                i.__swiper__ = !0, i.support = Se(), i.device = function (e = {}) {
                    return Te || (Te = function ({
                        userAgent: e
                    } = {}) {
                        const t = Se(),
                            s = ne(),
                            i = s.navigator.platform,
                            r = e || s.navigator.userAgent,
                            a = {
                                ios: !1,
                                android: !1
                            },
                            n = s.screen.width,
                            o = s.screen.height,
                            l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                        let d = r.match(/(iPad).*OS\s([\d_]+)/);
                        const h = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                            c = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            p = "Win32" === i;
                        let u = "MacIntel" === i;
                        return !d && u && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${o}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), u = !1), l && !p && (a.os = "android", a.android = !0), (d || c || h) && (a.os = "ios", a.ios = !0), a
                    }(e)), Te
                }({
                    userAgent: s.userAgent
                }), i.browser = (Ee || (Ee = function () {
                    const e = ne();
                    return {
                        isSafari: function () {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), Ee), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
                const r = {};
                i.modules.forEach((e => {
                    e({
                        swiper: i,
                        extendParams: We(s, r),
                        on: i.on.bind(i),
                        once: i.once.bind(i),
                        off: i.off.bind(i),
                        emit: i.emit.bind(i)
                    })
                }));
                const a = be({}, Ue, r);
                return i.params = be({}, a, je, s), i.originalParams = be({}, i.params), i.passedParams = be({}, s), i.params && i.params.on && Object.keys(i.params.on).forEach((e => {
                    i.on(e, i.params.on[e])
                })), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = me, Object.assign(i, {
                    enabled: i.params.enabled,
                    el: t,
                    classNames: [],
                    slides: me(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === i.params.direction,
                    isVertical: () => "vertical" === i.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: i.params.allowSlideNext,
                    allowSlidePrev: i.params.allowSlidePrev,
                    touchEvents: function () {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return i.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        }, i.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: i.params.focusableElements,
                        lastClickTime: fe(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: i.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), i.emit("_swiper"), i.params.init && i.init(), i
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const i = s.minTranslate(),
                    r = (s.maxTranslate() - i) * e + i;
                s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((s => {
                    const i = e.getSlideClasses(s);
                    t.push({
                        slideEl: s,
                        classNames: i
                    }), e.emit("_slideClass", s, i)
                })), e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e = "current", t = !1) {
                const {
                    params: s,
                    slides: i,
                    slidesGrid: r,
                    slidesSizesGrid: a,
                    size: n,
                    activeIndex: o
                } = this;
                let l = 1;
                if (s.centeredSlides) {
                    let e, t = i[o].swiperSlideSize;
                    for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > n && (e = !0));
                    for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > n && (e = !0))
                } else if ("current" === e)
                    for (let e = o + 1; e < i.length; e += 1)(t ? r[e] + a[e] - r[o] < n : r[e] - r[o] < n) && (l += 1);
                else
                    for (let e = o - 1; e >= 0; e -= 1) r[o] - r[e] < n && (l += 1);
                return l
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {
                    snapGrid: t,
                    params: s
                } = e;

                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                let r;
                s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (r = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), r || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }
            changeDirection(e, t = !0) {
                const s = this,
                    i = s.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), s.emit("changeDirection"), t && s.update()), s
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const s = me(e || t.params.el);
                if (!(e = s[0])) return !1;
                e.swiper = t;
                const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let r = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = me(e.shadowRoot.querySelector(i()));
                        return t.children = e => s.children(e), t
                    }
                    return s.children ? s.children(i()) : me(s).children(i())
                })();
                if (0 === r.length && t.params.createElements) {
                    const e = re().createElement("div");
                    r = me(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                        r.append(e)
                    }))
                }
                return Object.assign(t, {
                    $el: s,
                    el: e,
                    $wrapperEl: r,
                    wrapperEl: r[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                    wrongRTL: "-webkit-box" === r.css("display")
                }), !0
            }
            init(e) {
                const t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }
            destroy(e = !0, t = !0) {
                const s = this,
                    {
                        params: i,
                        $el: r,
                        $wrapperEl: a,
                        slides: n
                    } = s;
                return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                    s.off(e)
                })), !1 !== e && (s.$el[0].swiper = null, function (e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) { }
                        try {
                            delete t[e]
                        } catch (e) { }
                    }))
                }(s)), s.destroyed = !0), null
            }
            static extendDefaults(e) {
                be(je, e)
            }
            static get extendedDefaults() {
                return je
            }
            static get defaults() {
                return Ue
            }
            static installModule(e) {
                He.prototype.__modules__ || (He.prototype.__modules__ = []);
                const t = He.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => He.installModule(e))), He) : (He.installModule(e), He)
            }
        }
        Object.keys(Ge).forEach((e => {
            Object.keys(Ge[e]).forEach((t => {
                He.prototype[t] = Ge[e][t]
            }))
        })), He.use([function ({
            swiper: e,
            on: t,
            emit: s
        }) {
            const i = ne();
            let r = null,
                a = null;
            const n = () => {
                e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
            },
                o = () => {
                    e && !e.destroyed && e.initialized && s("orientationchange")
                };
            t("init", (() => {
                e.params.resizeObserver && void 0 !== i.ResizeObserver ? e && !e.destroyed && e.initialized && (r = new ResizeObserver((t => {
                    a = i.requestAnimationFrame((() => {
                        const {
                            width: s,
                            height: i
                        } = e;
                        let r = s,
                            a = i;
                        t.forEach((({
                            contentBoxSize: t,
                            contentRect: s,
                            target: i
                        }) => {
                            i && i !== e.el || (r = s ? s.width : (t[0] || t).inlineSize, a = s ? s.height : (t[0] || t).blockSize)
                        })), r === s && a === i || n()
                    }))
                })), r.observe(e.el)) : (i.addEventListener("resize", n), i.addEventListener("orientationchange", o))
            })), t("destroy", (() => {
                a && i.cancelAnimationFrame(a), r && r.unobserve && e.el && (r.unobserve(e.el), r = null), i.removeEventListener("resize", n), i.removeEventListener("orientationchange", o)
            }))
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            const r = [],
                a = ne(),
                n = (e, t = {}) => {
                    const s = new (a.MutationObserver || a.WebkitMutationObserver)((e => {
                        if (1 === e.length) return void i("observerUpdate", e[0]);
                        const t = function () {
                            i("observerUpdate", e[0])
                        };
                        a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                    }));
                    s.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), r.push(s)
                };
            t({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), s("init", (() => {
                if (e.params.observer) {
                    if (e.params.observeParents) {
                        const t = e.$el.parents();
                        for (let e = 0; e < t.length; e += 1) n(t[e])
                    }
                    n(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), n(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            })), s("destroy", (() => {
                r.forEach((e => {
                    e.disconnect()
                })), r.splice(0, r.length)
            }))
        }]);
        const Xe = He;

        function Ye(e, t, s, i) {
            const r = re();
            return e.params.createElements && Object.keys(i).forEach((a => {
                if (!s[a] && !0 === s.auto) {
                    let n = e.$el.children(`.${i[a]}`)[0];
                    n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
                }
            })), s
        }

        function qe(e = "") {
            return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
        }

        function Ze(e) {
            const t = this,
                {
                    $wrapperEl: s,
                    params: i
                } = t;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
            else s.append(e);
            i.loop && t.loopCreate(), i.observer || t.update()
        }

        function Ke(e) {
            const t = this,
                {
                    params: s,
                    $wrapperEl: i,
                    activeIndex: r
                } = t;
            s.loop && t.loopDestroy();
            let a = r + 1;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
                a = r + e.length
            } else i.prepend(e);
            s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(a, 0, !1)
        }

        function Qe(e, t) {
            const s = this,
                {
                    $wrapperEl: i,
                    params: r,
                    activeIndex: a
                } = s;
            let n = a;
            r.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(`.${r.slideClass}`));
            const o = s.slides.length;
            if (e <= 0) return void s.prependSlide(t);
            if (e >= o) return void s.appendSlide(t);
            let l = n > e ? n + 1 : n;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = s.slides.eq(t);
                e.remove(), d.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
                l = n > e ? n + t.length : n
            } else i.append(t);
            for (let e = 0; e < d.length; e += 1) i.append(d[e]);
            r.loop && s.loopCreate(), r.observer || s.update(), r.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
        }

        function Je(e) {
            const t = this,
                {
                    params: s,
                    $wrapperEl: i,
                    activeIndex: r
                } = t;
            let a = r;
            s.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${s.slideClass}`));
            let n, o = a;
            if ("object" == typeof e && "length" in e) {
                for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < o && (o -= 1);
                o = Math.max(o, 0)
            } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < o && (o -= 1), o = Math.max(o, 0);
            s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        }

        function et() {
            const e = this,
                t = [];
            for (let s = 0; s < e.slides.length; s += 1) t.push(s);
            e.removeSlide(t)
        }

        function tt(e) {
            const {
                effect: t,
                swiper: s,
                on: i,
                setTranslate: r,
                setTransition: a,
                overwriteParams: n,
                perspective: o,
                recreateShadows: l,
                getEffectParams: d
            } = e;
            let h;
            i("beforeInit", (() => {
                if (s.params.effect !== t) return;
                s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                const e = n ? n() : {};
                Object.assign(s.params, e), Object.assign(s.originalParams, e)
            })), i("setTranslate", (() => {
                s.params.effect === t && r()
            })), i("setTransition", ((e, i) => {
                s.params.effect === t && a(i)
            })), i("transitionEnd", (() => {
                if (s.params.effect === t && l) {
                    if (!d || !d().slideShadows) return;
                    s.slides.each((e => {
                        s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                    })), l()
                }
            })), i("virtualUpdate", (() => {
                s.params.effect === t && (s.slides.length || (h = !0), requestAnimationFrame((() => {
                    h && s.slides && s.slides.length && (r(), h = !1)
                })))
            }))
        }

        function st(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : t
        }

        function it({
            swiper: e,
            duration: t,
            transformEl: s,
            allSlides: i
        }) {
            const {
                slides: r,
                activeIndex: a,
                $wrapperEl: n
            } = e;
            if (e.params.virtualTranslate && 0 !== t) {
                let t, o = !1;
                t = i ? s ? r.find(s) : r : s ? r.eq(a).find(s) : r.eq(a), t.transitionEnd((() => {
                    if (o) return;
                    if (!e || e.destroyed) return;
                    o = !0, e.animating = !1;
                    const t = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < t.length; e += 1) n.trigger(t[e])
                }))
            }
        }

        function rt(e, t, s) {
            const i = "swiper-slide-shadow" + (s ? `-${s}` : ""),
                r = e.transformEl ? t.find(e.transformEl) : t;
            let a = r.children(`.${i}`);
            return a.length || (a = me(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), r.append(a)), a
        }
        const at = [function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            let r;

            function a(t, s) {
                const i = e.params.virtual;
                if (i.cache && e.virtual.cache[s]) return e.virtual.cache[s];
                const r = i.renderSlide ? me(i.renderSlide.call(e, t, s)) : me(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", s), i.cache && (e.virtual.cache[s] = r), r
            }

            function n(t) {
                const {
                    slidesPerView: s,
                    slidesPerGroup: r,
                    centeredSlides: n
                } = e.params, {
                    addSlidesBefore: o,
                    addSlidesAfter: l
                } = e.params.virtual, {
                    from: d,
                    to: h,
                    slides: c,
                    slidesGrid: p,
                    offset: u
                } = e.virtual;
                e.params.cssMode || e.updateActiveIndex();
                const m = e.activeIndex || 0;
                let g, f, v;
                g = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", n ? (f = Math.floor(s / 2) + r + l, v = Math.floor(s / 2) + r + o) : (f = s + (r - 1) + l, v = r + o);
                const x = Math.max((m || 0) - v, 0),
                    b = Math.min((m || 0) + f, c.length - 1),
                    w = (e.slidesGrid[x] || 0) - (e.slidesGrid[0] || 0);

                function y() {
                    e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), i("virtualUpdate")
                }
                if (Object.assign(e.virtual, {
                    from: x,
                    to: b,
                    offset: w,
                    slidesGrid: e.slidesGrid
                }), d === x && h === b && !t) return e.slidesGrid !== p && w !== u && e.slides.css(g, `${w}px`), e.updateProgress(), void i("virtualUpdate");
                if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                    offset: w,
                    from: x,
                    to: b,
                    slides: function () {
                        const e = [];
                        for (let t = x; t <= b; t += 1) e.push(c[t]);
                        return e
                    }()
                }), void (e.params.virtual.renderExternalUpdate ? y() : i("virtualUpdate"));
                const _ = [],
                    T = [];
                if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
                else
                    for (let t = d; t <= h; t += 1)(t < x || t > b) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
                for (let e = 0; e < c.length; e += 1) e >= x && e <= b && (void 0 === h || t ? T.push(e) : (e > h && T.push(e), e < d && _.push(e)));
                T.forEach((t => {
                    e.$wrapperEl.append(a(c[t], t))
                })), _.sort(((e, t) => t - e)).forEach((t => {
                    e.$wrapperEl.prepend(a(c[t], t))
                })), e.$wrapperEl.children(".swiper-slide").css(g, `${w}px`), y()
            }
            t({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }), e.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            }, s("beforeInit", (() => {
                e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || n())
            })), s("setTranslate", (() => {
                e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(r), r = setTimeout((() => {
                    n()
                }), 100)) : n())
            })), s("init update resize", (() => {
                e.params.virtual.enabled && e.params.cssMode && we(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
            })), Object.assign(e.virtual, {
                appendSlide: function (t) {
                    if ("object" == typeof t && "length" in t)
                        for (let s = 0; s < t.length; s += 1) t[s] && e.virtual.slides.push(t[s]);
                    else e.virtual.slides.push(t);
                    n(!0)
                },
                prependSlide: function (t) {
                    const s = e.activeIndex;
                    let i = s + 1,
                        r = 1;
                    if (Array.isArray(t)) {
                        for (let s = 0; s < t.length; s += 1) t[s] && e.virtual.slides.unshift(t[s]);
                        i = s + t.length, r = t.length
                    } else e.virtual.slides.unshift(t);
                    if (e.params.virtual.cache) {
                        const t = e.virtual.cache,
                            s = {};
                        Object.keys(t).forEach((e => {
                            const i = t[e],
                                a = i.attr("data-swiper-slide-index");
                            a && i.attr("data-swiper-slide-index", parseInt(a, 10) + r), s[parseInt(e, 10) + r] = i
                        })), e.virtual.cache = s
                    }
                    n(!0), e.slideTo(i, 0)
                },
                removeSlide: function (t) {
                    if (null == t) return;
                    let s = e.activeIndex;
                    if (Array.isArray(t))
                        for (let i = t.length - 1; i >= 0; i -= 1) e.virtual.slides.splice(t[i], 1), e.params.virtual.cache && delete e.virtual.cache[t[i]], t[i] < s && (s -= 1), s = Math.max(s, 0);
                    else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < s && (s -= 1), s = Math.max(s, 0);
                    n(!0), e.slideTo(s, 0)
                },
                removeAllSlides: function () {
                    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), n(!0), e.slideTo(0, 0)
                },
                update: n
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            const r = re(),
                a = ne();

            function n(t) {
                if (!e.enabled) return;
                const {
                    rtlTranslate: s
                } = e;
                let n = t;
                n.originalEvent && (n = n.originalEvent);
                const o = n.keyCode || n.charCode,
                    l = e.params.keyboard.pageUpDown,
                    d = l && 33 === o,
                    h = l && 34 === o,
                    c = 37 === o,
                    p = 39 === o,
                    u = 38 === o,
                    m = 40 === o;
                if (!e.allowSlideNext && (e.isHorizontal() && p || e.isVertical() && m || h)) return !1;
                if (!e.allowSlidePrev && (e.isHorizontal() && c || e.isVertical() && u || d)) return !1;
                if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
                    if (e.params.keyboard.onlyInViewport && (d || h || c || p || u || m)) {
                        let t = !1;
                        if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length) return;
                        const i = e.$el,
                            r = i[0].clientWidth,
                            n = i[0].clientHeight,
                            o = a.innerWidth,
                            l = a.innerHeight,
                            d = e.$el.offset();
                        s && (d.left -= e.$el[0].scrollLeft);
                        const h = [
                            [d.left, d.top],
                            [d.left + r, d.top],
                            [d.left, d.top + n],
                            [d.left + r, d.top + n]
                        ];
                        for (let e = 0; e < h.length; e += 1) {
                            const s = h[e];
                            if (s[0] >= 0 && s[0] <= o && s[1] >= 0 && s[1] <= l) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                t = !0
                            }
                        }
                        if (!t) return
                    }
                    e.isHorizontal() ? ((d || h || c || p) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((h || p) && !s || (d || c) && s) && e.slideNext(), ((d || c) && !s || (h || p) && s) && e.slidePrev()) : ((d || h || u || m) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (h || m) && e.slideNext(), (d || u) && e.slidePrev()), i("keyPress", o)
                }
            }

            function o() {
                e.keyboard.enabled || (me(r).on("keydown", n), e.keyboard.enabled = !0)
            }

            function l() {
                e.keyboard.enabled && (me(r).off("keydown", n), e.keyboard.enabled = !1)
            }
            e.keyboard = {
                enabled: !1
            }, t({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), s("init", (() => {
                e.params.keyboard.enabled && o()
            })), s("destroy", (() => {
                e.keyboard.enabled && l()
            })), Object.assign(e.keyboard, {
                enable: o,
                disable: l
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            const r = ne();
            let a;
            t({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            }), e.mousewheel = {
                enabled: !1
            };
            let n, o = fe();
            const l = [];

            function d() {
                e.enabled && (e.mouseEntered = !0)
            }

            function h() {
                e.enabled && (e.mouseEntered = !1)
            }

            function c(t) {
                return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && fe() - o < e.params.mousewheel.thresholdTime || !(t.delta >= 6 && fe() - o < 60) && (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), i("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), i("scroll", t.raw)), o = (new r.Date).getTime(), 1))
            }

            function p(t) {
                let s = t,
                    r = !0;
                if (!e.enabled) return;
                const o = e.params.mousewheel;
                e.params.cssMode && s.preventDefault();
                let d = e.$el;
                if ("container" !== e.params.mousewheel.eventsTarget && (d = me(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !d[0].contains(s.target) && !o.releaseOnEdges) return !0;
                s.originalEvent && (s = s.originalEvent);
                let h = 0;
                const p = e.rtlTranslate ? -1 : 1,
                    u = function (e) {
                        let t = 0,
                            s = 0,
                            i = 0,
                            r = 0;
                        return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, r = 10 * s, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = r, r = 0), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !s && (s = r < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: s,
                            pixelX: i,
                            pixelY: r
                        }
                    }(s);
                if (o.forceToAxis)
                    if (e.isHorizontal()) {
                        if (!(Math.abs(u.pixelX) > Math.abs(u.pixelY))) return !0;
                        h = -u.pixelX * p
                    } else {
                        if (!(Math.abs(u.pixelY) > Math.abs(u.pixelX))) return !0;
                        h = -u.pixelY
                    }
                else h = Math.abs(u.pixelX) > Math.abs(u.pixelY) ? -u.pixelX * p : -u.pixelY;
                if (0 === h) return !0;
                o.invert && (h = -h);
                let m = e.getTranslate() + h * o.sensitivity;
                if (m >= e.minTranslate() && (m = e.minTranslate()), m <= e.maxTranslate() && (m = e.maxTranslate()), r = !!e.params.loop || !(m === e.minTranslate() || m === e.maxTranslate()), r && e.params.nested && s.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                    const t = {
                        time: fe(),
                        delta: Math.abs(h),
                        direction: Math.sign(h)
                    },
                        r = n && t.time < n.time + 500 && t.delta <= n.delta && t.direction === n.direction;
                    if (!r) {
                        n = void 0, e.params.loop && e.loopFix();
                        let d = e.getTranslate() + h * o.sensitivity;
                        const c = e.isBeginning,
                            p = e.isEnd;
                        if (d >= e.minTranslate() && (d = e.minTranslate()), d <= e.maxTranslate() && (d = e.maxTranslate()), e.setTransition(0), e.setTranslate(d), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!c && e.isBeginning || !p && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                            clearTimeout(a), a = void 0, l.length >= 15 && l.shift();
                            const s = l.length ? l[l.length - 1] : void 0,
                                i = l[0];
                            if (l.push(t), s && (t.delta > s.delta || t.direction !== s.direction)) l.splice(0);
                            else if (l.length >= 15 && t.time - i.time < 500 && i.delta - t.delta >= 1 && t.delta <= 6) {
                                const s = h > 0 ? .8 : .2;
                                n = t, l.splice(0), a = ge((() => {
                                    e.slideToClosest(e.params.speed, !0, void 0, s)
                                }), 0)
                            }
                            a || (a = ge((() => {
                                n = t, l.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (r || i("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), d === e.minTranslate() || d === e.maxTranslate()) return !0
                    }
                } else {
                    const s = {
                        time: fe(),
                        delta: Math.abs(h),
                        direction: Math.sign(h),
                        raw: t
                    };
                    l.length >= 2 && l.shift();
                    const i = l.length ? l[l.length - 1] : void 0;
                    if (l.push(s), i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && c(s) : c(s), function (t) {
                        const s = e.params.mousewheel;
                        if (t.direction < 0) {
                            if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0
                        } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
                }
                return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
            }

            function u(t) {
                let s = e.$el;
                "container" !== e.params.mousewheel.eventsTarget && (s = me(e.params.mousewheel.eventsTarget)), s[t]("mouseenter", d), s[t]("mouseleave", h), s[t]("wheel", p)
            }

            function m() {
                return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", p), !0) : !e.mousewheel.enabled && (u("on"), e.mousewheel.enabled = !0, !0)
            }

            function g() {
                return e.params.cssMode ? (e.wrapperEl.addEventListener(event, p), !0) : !!e.mousewheel.enabled && (u("off"), e.mousewheel.enabled = !1, !0)
            }
            s("init", (() => {
                !e.params.mousewheel.enabled && e.params.cssMode && g(), e.params.mousewheel.enabled && m()
            })), s("destroy", (() => {
                e.params.cssMode && m(), e.mousewheel.enabled && g()
            })), Object.assign(e.mousewheel, {
                enable: m,
                disable: g
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            function r(t) {
                let s;
                return t && (s = me(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s
            }

            function a(t, s) {
                const i = e.params.navigation;
                t && t.length > 0 && (t[s ? "addClass" : "removeClass"](i.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](i.lockClass))
            }

            function n() {
                if (e.params.loop) return;
                const {
                    $nextEl: t,
                    $prevEl: s
                } = e.navigation;
                a(s, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
            }

            function o(t) {
                t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), i("navigationPrev"))
            }

            function l(t) {
                t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), i("navigationNext"))
            }

            function d() {
                const t = e.params.navigation;
                if (e.params.navigation = Ye(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
                const s = r(t.nextEl),
                    i = r(t.prevEl);
                s && s.length > 0 && s.on("click", l), i && i.length > 0 && i.on("click", o), Object.assign(e.navigation, {
                    $nextEl: s,
                    nextEl: s && s[0],
                    $prevEl: i,
                    prevEl: i && i[0]
                }), e.enabled || (s && s.addClass(t.lockClass), i && i.addClass(t.lockClass))
            }

            function h() {
                const {
                    $nextEl: t,
                    $prevEl: s
                } = e.navigation;
                t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(e.params.navigation.disabledClass))
            }
            t({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), e.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            }, s("init", (() => {
                !1 === e.params.navigation.enabled ? c() : (d(), n())
            })), s("toEdge fromEdge lock unlock", (() => {
                n()
            })), s("destroy", (() => {
                h()
            })), s("enable disable", (() => {
                const {
                    $nextEl: t,
                    $prevEl: s
                } = e.navigation;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
            })), s("click", ((t, s) => {
                const {
                    $nextEl: r,
                    $prevEl: a
                } = e.navigation, n = s.target;
                if (e.params.navigation.hideOnClick && !me(n).is(a) && !me(n).is(r)) {
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                    let t;
                    r ? t = r.hasClass(e.params.navigation.hiddenClass) : a && (t = a.hasClass(e.params.navigation.hiddenClass)), i(!0 === t ? "navigationShow" : "navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
                }
            }));
            const c = () => {
                e.$el.addClass(e.params.navigation.navigationDisabledClass), h()
            };
            Object.assign(e.navigation, {
                enable: () => {
                    e.$el.removeClass(e.params.navigation.navigationDisabledClass), d(), n()
                },
                disable: c,
                update: n,
                init: d,
                destroy: h
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            const r = "swiper-pagination";
            let a;
            t({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${r}-bullet`,
                    bulletActiveClass: `${r}-bullet-active`,
                    modifierClass: `${r}-`,
                    currentClass: `${r}-current`,
                    totalClass: `${r}-total`,
                    hiddenClass: `${r}-hidden`,
                    progressbarFillClass: `${r}-progressbar-fill`,
                    progressbarOppositeClass: `${r}-progressbar-opposite`,
                    clickableClass: `${r}-clickable`,
                    lockClass: `${r}-lock`,
                    horizontalClass: `${r}-horizontal`,
                    verticalClass: `${r}-vertical`,
                    paginationDisabledClass: `${r}-disabled`
                }
            }), e.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let n = 0;

            function o() {
                return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
            }

            function l(t, s) {
                const {
                    bulletActiveClass: i
                } = e.params.pagination;
                t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`)
            }

            function d() {
                const t = e.rtl,
                    s = e.params.pagination;
                if (o()) return;
                const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    d = e.pagination.$el;
                let h;
                const c = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? (h = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), h > r - 1 - 2 * e.loopedSlides && (h -= r - 2 * e.loopedSlides), h > c - 1 && (h -= c), h < 0 && "bullets" !== e.params.paginationType && (h = c + h)) : h = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    const i = e.pagination.bullets;
                    let r, o, c;
                    if (s.dynamicBullets && (a = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(e.isHorizontal() ? "width" : "height", a * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += h - (e.previousIndex - e.loopedSlides || 0), n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), r = Math.max(h - n, 0), o = r + (Math.min(i.length, s.dynamicMainBullets) - 1), c = (o + r) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), d.length > 1) i.each((e => {
                        const t = me(e),
                            i = t.index();
                        i === h && t.addClass(s.bulletActiveClass), s.dynamicBullets && (i >= r && i <= o && t.addClass(`${s.bulletActiveClass}-main`), i === r && l(t, "prev"), i === o && l(t, "next"))
                    }));
                    else {
                        const t = i.eq(h),
                            a = t.index();
                        if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                            const t = i.eq(r),
                                n = i.eq(o);
                            for (let e = r; e <= o; e += 1) i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                            if (e.params.loop)
                                if (a >= i.length) {
                                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                                } else l(t, "prev"), l(n, "next");
                            else l(t, "prev"), l(n, "next")
                        }
                    }
                    if (s.dynamicBullets) {
                        const r = Math.min(i.length, s.dynamicMainBullets + 4),
                            n = (a * r - a) / 2 - c * a,
                            o = t ? "right" : "left";
                        i.css(e.isHorizontal() ? o : "top", `${n}px`)
                    }
                }
                if ("fraction" === s.type && (d.find(qe(s.currentClass)).text(s.formatFractionCurrent(h + 1)), d.find(qe(s.totalClass)).text(s.formatFractionTotal(c))), "progressbar" === s.type) {
                    let t;
                    t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    const i = (h + 1) / c;
                    let r = 1,
                        a = 1;
                    "horizontal" === t ? r = i : a = i, d.find(qe(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${a})`).transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (d.html(s.renderCustom(e, h + 1, c)), i("paginationRender", d[0])) : i("paginationUpdate", d[0]), e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }

            function h() {
                const t = e.params.pagination;
                if (o()) return;
                const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    r = e.pagination.$el;
                let a = "";
                if ("bullets" === t.type) {
                    let i = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && i > s && (i = s);
                    for (let s = 0; s < i; s += 1) t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    r.html(a), e.pagination.bullets = r.find(qe(t.bulletClass))
                }
                "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, r.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, r.html(a)), "custom" !== t.type && i("paginationRender", e.pagination.$el[0])
            }

            function c() {
                e.params.pagination = Ye(e, e.originalParams.pagination, e.params.pagination, {
                    el: "swiper-pagination"
                });
                const t = e.params.pagination;
                if (!t.el) return;
                let s = me(t.el);
                0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter((t => me(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", qe(t.bulletClass), (function (t) {
                    t.preventDefault();
                    let s = me(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (s += e.loopedSlides), e.slideTo(s)
                })), Object.assign(e.pagination, {
                    $el: s,
                    el: s[0]
                }), e.enabled || s.addClass(t.lockClass))
            }

            function p() {
                const t = e.params.pagination;
                if (o()) return;
                const s = e.pagination.$el;
                s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", qe(t.bulletClass))
            }
            s("init", (() => {
                !1 === e.params.pagination.enabled ? u() : (c(), h(), d())
            })), s("activeIndexChange", (() => {
                (e.params.loop || void 0 === e.snapIndex) && d()
            })), s("snapIndexChange", (() => {
                e.params.loop || d()
            })), s("slidesLengthChange", (() => {
                e.params.loop && (h(), d())
            })), s("snapGridLengthChange", (() => {
                e.params.loop || (h(), d())
            })), s("destroy", (() => {
                p()
            })), s("enable disable", (() => {
                const {
                    $el: t
                } = e.pagination;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
            })), s("lock unlock", (() => {
                d()
            })), s("click", ((t, s) => {
                const r = s.target,
                    {
                        $el: a
                    } = e.pagination;
                if (e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !me(r).hasClass(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && r === e.navigation.nextEl || e.navigation.prevEl && r === e.navigation.prevEl)) return;
                    const t = a.hasClass(e.params.pagination.hiddenClass);
                    i(!0 === t ? "paginationShow" : "paginationHide"), a.toggleClass(e.params.pagination.hiddenClass)
                }
            }));
            const u = () => {
                e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), p()
            };
            Object.assign(e.pagination, {
                enable: () => {
                    e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), c(), h(), d()
                },
                disable: u,
                render: h,
                update: d,
                init: c,
                destroy: p
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            const r = re();
            let a, n, o, l, d = !1,
                h = null,
                c = null;

            function p() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const {
                    scrollbar: t,
                    rtlTranslate: s,
                    progress: i
                } = e, {
                    $dragEl: r,
                    $el: a
                } = t, l = e.params.scrollbar;
                let d = n,
                    c = (o - n) * i;
                s ? (c = -c, c > 0 ? (d = n - c, c = 0) : -c + n > o && (d = o + c)) : c < 0 ? (d = n + c, c = 0) : c + n > o && (d = o - c), e.isHorizontal() ? (r.transform(`translate3d(${c}px, 0, 0)`), r[0].style.width = `${d}px`) : (r.transform(`translate3d(0px, ${c}px, 0)`), r[0].style.height = `${d}px`), l.hide && (clearTimeout(h), a[0].style.opacity = 1, h = setTimeout((() => {
                    a[0].style.opacity = 0, a.transition(400)
                }), 1e3))
            }

            function u() {
                if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                const {
                    scrollbar: t
                } = e, {
                    $dragEl: s,
                    $el: i
                } = t;
                s[0].style.width = "", s[0].style.height = "", o = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, l = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), n = "auto" === e.params.scrollbar.dragSize ? o * l : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${n}px` : s[0].style.height = `${n}px`, i[0].style.display = l >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }

            function m(t) {
                return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
            }

            function g(t) {
                const {
                    scrollbar: s,
                    rtlTranslate: i
                } = e, {
                    $el: r
                } = s;
                let l;
                l = (m(t) - r.offset()[e.isHorizontal() ? "left" : "top"] - (null !== a ? a : n / 2)) / (o - n), l = Math.max(Math.min(l, 1), 0), i && (l = 1 - l);
                const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * l;
                e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            function f(t) {
                const s = e.params.scrollbar,
                    {
                        scrollbar: r,
                        $wrapperEl: n
                    } = e,
                    {
                        $el: o,
                        $dragEl: l
                    } = r;
                d = !0, a = t.target === l[0] || t.target === l ? m(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), n.transition(100), l.transition(100), g(t), clearTimeout(c), o.transition(0), s.hide && o.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), i("scrollbarDragStart", t)
            }

            function v(t) {
                const {
                    scrollbar: s,
                    $wrapperEl: r
                } = e, {
                    $el: a,
                    $dragEl: n
                } = s;
                d && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, g(t), r.transition(0), a.transition(0), n.transition(0), i("scrollbarDragMove", t))
            }

            function x(t) {
                const s = e.params.scrollbar,
                    {
                        scrollbar: r,
                        $wrapperEl: a
                    } = e,
                    {
                        $el: n
                    } = r;
                d && (d = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), s.hide && (clearTimeout(c), c = ge((() => {
                    n.css("opacity", 0), n.transition(400)
                }), 1e3)), i("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest())
            }

            function b(t) {
                const {
                    scrollbar: s,
                    touchEventsTouch: i,
                    touchEventsDesktop: a,
                    params: n,
                    support: o
                } = e, l = s.$el;
                if (!l) return;
                const d = l[0],
                    h = !(!o.passiveListener || !n.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    },
                    c = !(!o.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                if (!d) return;
                const p = "on" === t ? "addEventListener" : "removeEventListener";
                o.touch ? (d[p](i.start, f, h), d[p](i.move, v, h), d[p](i.end, x, c)) : (d[p](a.start, f, h), r[p](a.move, v, h), r[p](a.end, x, c))
            }

            function w() {
                const {
                    scrollbar: t,
                    $el: s
                } = e;
                e.params.scrollbar = Ye(e, e.originalParams.scrollbar, e.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const i = e.params.scrollbar;
                if (!i.el) return;
                let r = me(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === s.find(i.el).length && (r = s.find(i.el)), r.addClass(e.isHorizontal() ? i.horizontalClass : i.verticalClass);
                let a = r.find(`.${e.params.scrollbar.dragClass}`);
                0 === a.length && (a = me(`<div class="${e.params.scrollbar.dragClass}"></div>`), r.append(a)), Object.assign(t, {
                    $el: r,
                    el: r[0],
                    $dragEl: a,
                    dragEl: a[0]
                }), i.draggable && e.params.scrollbar.el && e.scrollbar.el && b("on"), r && r[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
            }

            function y() {
                const t = e.params.scrollbar,
                    s = e.scrollbar.$el;
                s && s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.params.scrollbar.el && e.scrollbar.el && b("off")
            }
            t({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), e.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
            }, s("init", (() => {
                !1 === e.params.scrollbar.enabled ? _() : (w(), u(), p())
            })), s("update resize observerUpdate lock unlock", (() => {
                u()
            })), s("setTranslate", (() => {
                p()
            })), s("setTransition", ((t, s) => {
                ! function (t) {
                    e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
                }(s)
            })), s("enable disable", (() => {
                const {
                    $el: t
                } = e.scrollbar;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
            })), s("destroy", (() => {
                y()
            }));
            const _ = () => {
                e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass), y()
            };
            Object.assign(e.scrollbar, {
                enable: () => {
                    e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), e.scrollbar.$el && e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass), w(), u(), p()
                },
                disable: _,
                updateSize: u,
                setTranslate: p,
                init: w,
                destroy: y
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                parallax: {
                    enabled: !1
                }
            });
            const i = (t, s) => {
                const {
                    rtl: i
                } = e, r = me(t), a = i ? -1 : 1, n = r.attr("data-swiper-parallax") || "0";
                let o = r.attr("data-swiper-parallax-x"),
                    l = r.attr("data-swiper-parallax-y");
                const d = r.attr("data-swiper-parallax-scale"),
                    h = r.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : e.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s * a + "%" : o * s * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != h) {
                    const e = h - (h - 1) * (1 - Math.abs(s));
                    r[0].style.opacity = e
                }
                if (null == d) r.transform(`translate3d(${o}, ${l}, 0px)`);
                else {
                    const e = d - (d - 1) * (1 - Math.abs(s));
                    r.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
                }
            },
                r = () => {
                    const {
                        $el: t,
                        slides: s,
                        progress: r,
                        snapGrid: a
                    } = e;
                    t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        i(e, r)
                    })), s.each(((t, s) => {
                        let n = t.progress;
                        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - r * (a.length - 1)), n = Math.min(Math.max(n, -1), 1), me(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                            i(e, n)
                        }))
                    }))
                };
            s("beforeInit", (() => {
                e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            })), s("init", (() => {
                e.params.parallax.enabled && r()
            })), s("setTranslate", (() => {
                e.params.parallax.enabled && r()
            })), s("setTransition", ((t, s) => {
                e.params.parallax.enabled && ((t = e.params.speed) => {
                    const {
                        $el: s
                    } = e;
                    s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        const s = me(e);
                        let i = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (i = 0), s.transition(i)
                    }))
                })(s)
            }))
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            const r = ne();
            t({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), e.zoom = {
                enabled: !1
            };
            let a, n, o, l = 1,
                d = !1;
            const h = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
                c = {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                p = {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                };
            let u = 1;

            function m(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX,
                    s = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    r = e.targetTouches[1].pageY;
                return Math.sqrt((i - t) ** 2 + (r - s) ** 2)
            }

            function g(t) {
                const s = e.support,
                    i = e.params.zoom;
                if (n = !1, o = !1, !s.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    n = !0, h.scaleStart = m(t)
                }
                h.$slideEl && h.$slideEl.length || (h.$slideEl = me(t.target).closest(`.${e.params.slideClass}`), 0 === h.$slideEl.length && (h.$slideEl = e.slides.eq(e.activeIndex)), h.$imageEl = h.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), h.$imageWrapEl = h.$imageEl.parent(`.${i.containerClass}`), h.maxRatio = h.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== h.$imageWrapEl.length) ? (h.$imageEl && h.$imageEl.transition(0), d = !0) : h.$imageEl = void 0
            }

            function f(t) {
                const s = e.support,
                    i = e.params.zoom,
                    r = e.zoom;
                if (!s.gestures) {
                    if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                    o = !0, h.scaleMove = m(t)
                }
                h.$imageEl && 0 !== h.$imageEl.length ? (s.gestures ? r.scale = t.scale * l : r.scale = h.scaleMove / h.scaleStart * l, r.scale > h.maxRatio && (r.scale = h.maxRatio - 1 + (r.scale - h.maxRatio + 1) ** .5), r.scale < i.minRatio && (r.scale = i.minRatio + 1 - (i.minRatio - r.scale + 1) ** .5), h.$imageEl.transform(`translate3d(0,0,0) scale(${r.scale})`)) : "gesturechange" === t.type && g(t)
            }

            function v(t) {
                const s = e.device,
                    i = e.support,
                    r = e.params.zoom,
                    a = e.zoom;
                if (!i.gestures) {
                    if (!n || !o) return;
                    if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android) return;
                    n = !1, o = !1
                }
                h.$imageEl && 0 !== h.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, h.maxRatio), r.minRatio), h.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`), l = a.scale, d = !1, 1 === a.scale && (h.$slideEl = void 0))
            }

            function x(t) {
                const s = e.zoom;
                if (!h.$imageEl || 0 === h.$imageEl.length) return;
                if (e.allowClick = !1, !c.isTouched || !h.$slideEl) return;
                c.isMoved || (c.width = h.$imageEl[0].offsetWidth, c.height = h.$imageEl[0].offsetHeight, c.startX = ve(h.$imageWrapEl[0], "x") || 0, c.startY = ve(h.$imageWrapEl[0], "y") || 0, h.slideWidth = h.$slideEl[0].offsetWidth, h.slideHeight = h.$slideEl[0].offsetHeight, h.$imageWrapEl.transition(0));
                const i = c.width * s.scale,
                    r = c.height * s.scale;
                if (!(i < h.slideWidth && r < h.slideHeight)) {
                    if (c.minX = Math.min(h.slideWidth / 2 - i / 2, 0), c.maxX = -c.minX, c.minY = Math.min(h.slideHeight / 2 - r / 2, 0), c.maxY = -c.minY, c.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, c.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !c.isMoved && !d) {
                        if (e.isHorizontal() && (Math.floor(c.minX) === Math.floor(c.startX) && c.touchesCurrent.x < c.touchesStart.x || Math.floor(c.maxX) === Math.floor(c.startX) && c.touchesCurrent.x > c.touchesStart.x)) return void (c.isTouched = !1);
                        if (!e.isHorizontal() && (Math.floor(c.minY) === Math.floor(c.startY) && c.touchesCurrent.y < c.touchesStart.y || Math.floor(c.maxY) === Math.floor(c.startY) && c.touchesCurrent.y > c.touchesStart.y)) return void (c.isTouched = !1)
                    }
                    t.cancelable && t.preventDefault(), t.stopPropagation(), c.isMoved = !0, c.currentX = c.touchesCurrent.x - c.touchesStart.x + c.startX, c.currentY = c.touchesCurrent.y - c.touchesStart.y + c.startY, c.currentX < c.minX && (c.currentX = c.minX + 1 - (c.minX - c.currentX + 1) ** .8), c.currentX > c.maxX && (c.currentX = c.maxX - 1 + (c.currentX - c.maxX + 1) ** .8), c.currentY < c.minY && (c.currentY = c.minY + 1 - (c.minY - c.currentY + 1) ** .8), c.currentY > c.maxY && (c.currentY = c.maxY - 1 + (c.currentY - c.maxY + 1) ** .8), p.prevPositionX || (p.prevPositionX = c.touchesCurrent.x), p.prevPositionY || (p.prevPositionY = c.touchesCurrent.y), p.prevTime || (p.prevTime = Date.now()), p.x = (c.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2, p.y = (c.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2, Math.abs(c.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0), Math.abs(c.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0), p.prevPositionX = c.touchesCurrent.x, p.prevPositionY = c.touchesCurrent.y, p.prevTime = Date.now(), h.$imageWrapEl.transform(`translate3d(${c.currentX}px, ${c.currentY}px,0)`)
                }
            }

            function b() {
                const t = e.zoom;
                h.$slideEl && e.previousIndex !== e.activeIndex && (h.$imageEl && h.$imageEl.transform("translate3d(0,0,0) scale(1)"), h.$imageWrapEl && h.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, l = 1, h.$slideEl = void 0, h.$imageEl = void 0, h.$imageWrapEl = void 0)
            }

            function w(t) {
                const s = e.zoom,
                    i = e.params.zoom;
                if (h.$slideEl || (t && t.target && (h.$slideEl = me(t.target).closest(`.${e.params.slideClass}`)), h.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? h.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : h.$slideEl = e.slides.eq(e.activeIndex)), h.$imageEl = h.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), h.$imageWrapEl = h.$imageEl.parent(`.${i.containerClass}`)), !h.$imageEl || 0 === h.$imageEl.length || !h.$imageWrapEl || 0 === h.$imageWrapEl.length) return;
                let a, n, o, d, p, u, m, g, f, v, x, b, w, y, _, T, E, S;
                e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), h.$slideEl.addClass(`${i.zoomedSlideClass}`), void 0 === c.touchesStart.x && t ? (a = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (a = c.touchesStart.x, n = c.touchesStart.y), s.scale = h.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, l = h.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, t ? (E = h.$slideEl[0].offsetWidth, S = h.$slideEl[0].offsetHeight, o = h.$slideEl.offset().left + r.scrollX, d = h.$slideEl.offset().top + r.scrollY, p = o + E / 2 - a, u = d + S / 2 - n, f = h.$imageEl[0].offsetWidth, v = h.$imageEl[0].offsetHeight, x = f * s.scale, b = v * s.scale, w = Math.min(E / 2 - x / 2, 0), y = Math.min(S / 2 - b / 2, 0), _ = -w, T = -y, m = p * s.scale, g = u * s.scale, m < w && (m = w), m > _ && (m = _), g < y && (g = y), g > T && (g = T)) : (m = 0, g = 0), h.$imageWrapEl.transition(300).transform(`translate3d(${m}px, ${g}px,0)`), h.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
            }

            function y() {
                const t = e.zoom,
                    s = e.params.zoom;
                h.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? h.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : h.$slideEl = e.slides.eq(e.activeIndex), h.$imageEl = h.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), h.$imageWrapEl = h.$imageEl.parent(`.${s.containerClass}`)), h.$imageEl && 0 !== h.$imageEl.length && h.$imageWrapEl && 0 !== h.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, l = 1, h.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), h.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), h.$slideEl.removeClass(`${s.zoomedSlideClass}`), h.$slideEl = void 0)
            }

            function _(t) {
                const s = e.zoom;
                s.scale && 1 !== s.scale ? y() : w(t)
            }

            function T() {
                const t = e.support;
                return {
                    passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !t.passiveListener || {
                        passive: !1,
                        capture: !0
                    }
                }
            }

            function E() {
                return `.${e.params.slideClass}`
            }

            function S(t) {
                const {
                    passiveListener: s
                } = T(), i = E();
                e.$wrapperEl[t]("gesturestart", i, g, s), e.$wrapperEl[t]("gesturechange", i, f, s), e.$wrapperEl[t]("gestureend", i, v, s)
            }

            function C() {
                a || (a = !0, S("on"))
            }

            function M() {
                a && (a = !1, S("off"))
            }

            function P() {
                const t = e.zoom;
                if (t.enabled) return;
                t.enabled = !0;
                const s = e.support,
                    {
                        passiveListener: i,
                        activeListenerWithCapture: r
                    } = T(),
                    a = E();
                s.gestures ? (e.$wrapperEl.on(e.touchEvents.start, C, i), e.$wrapperEl.on(e.touchEvents.end, M, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, a, g, i), e.$wrapperEl.on(e.touchEvents.move, a, f, r), e.$wrapperEl.on(e.touchEvents.end, a, v, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, v, i)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, x, r)
            }

            function R() {
                const t = e.zoom;
                if (!t.enabled) return;
                const s = e.support;
                t.enabled = !1;
                const {
                    passiveListener: i,
                    activeListenerWithCapture: r
                } = T(), a = E();
                s.gestures ? (e.$wrapperEl.off(e.touchEvents.start, C, i), e.$wrapperEl.off(e.touchEvents.end, M, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, a, g, i), e.$wrapperEl.off(e.touchEvents.move, a, f, r), e.$wrapperEl.off(e.touchEvents.end, a, v, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, v, i)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, x, r)
            }
            Object.defineProperty(e.zoom, "scale", {
                get: () => u,
                set(e) {
                    if (u !== e) {
                        const t = h.$imageEl ? h.$imageEl[0] : void 0,
                            s = h.$slideEl ? h.$slideEl[0] : void 0;
                        i("zoomChange", e, t, s)
                    }
                    u = e
                }
            }), s("init", (() => {
                e.params.zoom.enabled && P()
            })), s("destroy", (() => {
                R()
            })), s("touchStart", ((t, s) => {
                e.zoom.enabled && function (t) {
                    const s = e.device;
                    h.$imageEl && 0 !== h.$imageEl.length && (c.isTouched || (s.android && t.cancelable && t.preventDefault(), c.isTouched = !0, c.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, c.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                }(s)
            })), s("touchEnd", ((t, s) => {
                e.zoom.enabled && function () {
                    const t = e.zoom;
                    if (!h.$imageEl || 0 === h.$imageEl.length) return;
                    if (!c.isTouched || !c.isMoved) return c.isTouched = !1, void (c.isMoved = !1);
                    c.isTouched = !1, c.isMoved = !1;
                    let s = 300,
                        i = 300;
                    const r = p.x * s,
                        a = c.currentX + r,
                        n = p.y * i,
                        o = c.currentY + n;
                    0 !== p.x && (s = Math.abs((a - c.currentX) / p.x)), 0 !== p.y && (i = Math.abs((o - c.currentY) / p.y));
                    const l = Math.max(s, i);
                    c.currentX = a, c.currentY = o;
                    const d = c.width * t.scale,
                        u = c.height * t.scale;
                    c.minX = Math.min(h.slideWidth / 2 - d / 2, 0), c.maxX = -c.minX, c.minY = Math.min(h.slideHeight / 2 - u / 2, 0), c.maxY = -c.minY, c.currentX = Math.max(Math.min(c.currentX, c.maxX), c.minX), c.currentY = Math.max(Math.min(c.currentY, c.maxY), c.minY), h.$imageWrapEl.transition(l).transform(`translate3d(${c.currentX}px, ${c.currentY}px,0)`)
                }()
            })), s("doubleTap", ((t, s) => {
                !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && _(s)
            })), s("transitionEnd", (() => {
                e.zoom.enabled && e.params.zoom.enabled && b()
            })), s("slideChange", (() => {
                e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && b()
            })), Object.assign(e.zoom, {
                enable: P,
                disable: R,
                in: w,
                out: y,
                toggle: _
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            t({
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            }), e.lazy = {};
            let r = !1,
                a = !1;

            function n(t, s = !0) {
                const r = e.params.lazy;
                if (void 0 === t) return;
                if (0 === e.slides.length) return;
                const a = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
                    o = a.find(`.${r.elementClass}:not(.${r.loadedClass}):not(.${r.loadingClass})`);
                !a.hasClass(r.elementClass) || a.hasClass(r.loadedClass) || a.hasClass(r.loadingClass) || o.push(a[0]), 0 !== o.length && o.each((t => {
                    const o = me(t);
                    o.addClass(r.loadingClass);
                    const l = o.attr("data-background"),
                        d = o.attr("data-src"),
                        h = o.attr("data-srcset"),
                        c = o.attr("data-sizes"),
                        p = o.parent("picture");
                    e.loadImage(o[0], d || l, h, c, !1, (() => {
                        if (null != e && e && (!e || e.params) && !e.destroyed) {
                            if (l ? (o.css("background-image", `url("${l}")`), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), p.length && p.children("source").each((e => {
                                const t = me(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), a.find(`.${r.preloaderClass}`).remove(), e.params.loop && s) {
                                const t = a.attr("data-swiper-slide-index");
                                a.hasClass(e.params.slideDuplicateClass) ? n(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1) : n(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                            }
                            i("lazyImageReady", a[0], o[0]), e.params.autoHeight && e.updateAutoHeight()
                        }
                    })), i("lazyImageLoad", a[0], o[0])
                }))
            }

            function o() {
                const {
                    $wrapperEl: t,
                    params: s,
                    slides: i,
                    activeIndex: r
                } = e, o = e.virtual && s.virtual.enabled, l = s.lazy;
                let d = s.slidesPerView;

                function h(e) {
                    if (o) {
                        if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                    } else if (i[e]) return !0;
                    return !1
                }

                function c(e) {
                    return o ? me(e).attr("data-swiper-slide-index") : me(e).index()
                }
                if ("auto" === d && (d = 0), a || (a = !0), e.params.watchSlidesProgress) t.children(`.${s.slideVisibleClass}`).each((e => {
                    n(o ? me(e).attr("data-swiper-slide-index") : me(e).index())
                }));
                else if (d > 1)
                    for (let e = r; e < r + d; e += 1) h(e) && n(e);
                else n(r);
                if (l.loadPrevNext)
                    if (d > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                        const e = l.loadPrevNextAmount,
                            t = Math.ceil(d),
                            s = Math.min(r + t + Math.max(e, t), i.length),
                            a = Math.max(r - Math.max(t, e), 0);
                        for (let e = r + t; e < s; e += 1) h(e) && n(e);
                        for (let e = a; e < r; e += 1) h(e) && n(e)
                    } else {
                        const e = t.children(`.${s.slideNextClass}`);
                        e.length > 0 && n(c(e));
                        const i = t.children(`.${s.slidePrevClass}`);
                        i.length > 0 && n(c(i))
                    }
            }

            function l() {
                const t = ne();
                if (!e || e.destroyed) return;
                const s = e.params.lazy.scrollingElement ? me(e.params.lazy.scrollingElement) : me(t),
                    i = s[0] === t,
                    a = i ? t.innerWidth : s[0].offsetWidth,
                    n = i ? t.innerHeight : s[0].offsetHeight,
                    d = e.$el.offset(),
                    {
                        rtlTranslate: h
                    } = e;
                let c = !1;
                h && (d.left -= e.$el[0].scrollLeft);
                const p = [
                    [d.left, d.top],
                    [d.left + e.width, d.top],
                    [d.left, d.top + e.height],
                    [d.left + e.width, d.top + e.height]
                ];
                for (let e = 0; e < p.length; e += 1) {
                    const t = p[e];
                    if (t[0] >= 0 && t[0] <= a && t[1] >= 0 && t[1] <= n) {
                        if (0 === t[0] && 0 === t[1]) continue;
                        c = !0
                    }
                }
                const u = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                c ? (o(), s.off("scroll", l, u)) : r || (r = !0, s.on("scroll", l, u))
            }
            s("beforeInit", (() => {
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            })), s("init", (() => {
                e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o())
            })), s("scroll", (() => {
                e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o()
            })), s("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
                e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o())
            })), s("transitionStart", (() => {
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !a) && (e.params.lazy.checkInView ? l() : o())
            })), s("transitionEnd", (() => {
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? l() : o())
            })), s("slideChange", (() => {
                const {
                    lazy: t,
                    cssMode: s,
                    watchSlidesProgress: i,
                    touchReleaseOnEdges: r,
                    resistanceRatio: a
                } = e.params;
                t.enabled && (s || i && (r || 0 === a)) && o()
            })), s("destroy", (() => {
                e.$el && e.$el.find(`.${e.params.lazy.loadingClass}`).removeClass(e.params.lazy.loadingClass)
            })), Object.assign(e.lazy, {
                load: o,
                loadInSlide: n
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            function i(e, t) {
                const s = function () {
                    let e, t, s;
                    return (i, r) => {
                        for (t = -1, e = i.length; e - t > 1;) s = e + t >> 1, i[s] <= r ? t = s : e = s;
                        return e
                    }
                }();
                let i, r;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (r = s(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                }, this
            }

            function r() {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            }
            t({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), e.controller = {
                control: void 0
            }, s("beforeInit", (() => {
                e.controller.control = e.params.controller.control
            })), s("update", (() => {
                r()
            })), s("resize", (() => {
                r()
            })), s("observerUpdate", (() => {
                r()
            })), s("setTranslate", ((t, s, i) => {
                e.controller.control && e.controller.setTranslate(s, i)
            })), s("setTransition", ((t, s, i) => {
                e.controller.control && e.controller.setTransition(s, i)
            })), Object.assign(e.controller, {
                setTranslate: function (t, s) {
                    const r = e.controller.control;
                    let a, n;
                    const o = e.constructor;

                    function l(t) {
                        const s = e.rtlTranslate ? -e.translate : e.translate;
                        "slide" === e.params.controller.by && (function (t) {
                            e.controller.spline || (e.controller.spline = e.params.loop ? new i(e.slidesGrid, t.slidesGrid) : new i(e.snapGrid, t.snapGrid))
                        }(t), n = -e.controller.spline.interpolate(-s)), n && "container" !== e.params.controller.by || (a = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), n = (s - e.minTranslate()) * a + t.minTranslate()), e.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, e), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (Array.isArray(r))
                        for (let e = 0; e < r.length; e += 1) r[e] !== s && r[e] instanceof o && l(r[e]);
                    else r instanceof o && s !== r && l(r)
                },
                setTransition: function (t, s) {
                    const i = e.constructor,
                        r = e.controller.control;
                    let a;

                    function n(s) {
                        s.setTransition(t, e), 0 !== t && (s.transitionStart(), s.params.autoHeight && ge((() => {
                            s.updateAutoHeight()
                        })), s.$wrapperEl.transitionEnd((() => {
                            r && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd())
                        })))
                    }
                    if (Array.isArray(r))
                        for (a = 0; a < r.length; a += 1) r[a] !== s && r[a] instanceof i && n(r[a]);
                    else r instanceof i && s !== r && n(r)
                }
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            }), e.a11y = {
                clicked: !1
            };
            let i = null;

            function r(e) {
                const t = i;
                0 !== t.length && (t.html(""), t.html(e))
            }

            function a(e) {
                e.attr("tabIndex", "0")
            }

            function n(e) {
                e.attr("tabIndex", "-1")
            }

            function o(e, t) {
                e.attr("role", t)
            }

            function l(e, t) {
                e.attr("aria-roledescription", t)
            }

            function d(e, t) {
                e.attr("aria-label", t)
            }

            function h(e) {
                e.attr("aria-disabled", !0)
            }

            function c(e) {
                e.attr("aria-disabled", !1)
            }

            function p(t) {
                if (13 !== t.keyCode && 32 !== t.keyCode) return;
                const s = e.params.a11y,
                    i = me(t.target);
                e.navigation && e.navigation.$nextEl && i.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), e.navigation && e.navigation.$prevEl && i.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), e.pagination && i.is(qe(e.params.pagination.bulletClass)) && i[0].click()
            }

            function u() {
                return e.pagination && e.pagination.bullets && e.pagination.bullets.length
            }

            function m() {
                return u() && e.params.pagination.clickable
            }
            const g = (e, t, s) => {
                a(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", p)), d(e, s),
                    function (e, t) {
                        e.attr("aria-controls", t)
                    }(e, t)
            },
                f = () => {
                    e.a11y.clicked = !0
                },
                v = () => {
                    requestAnimationFrame((() => {
                        requestAnimationFrame((() => {
                            e.destroyed || (e.a11y.clicked = !1)
                        }))
                    }))
                },
                x = t => {
                    if (e.a11y.clicked) return;
                    const s = t.target.closest(`.${e.params.slideClass}`);
                    if (!s || !e.slides.includes(s)) return;
                    const i = e.slides.indexOf(s) === e.activeIndex,
                        r = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(s);
                    i || r || t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, e.slideTo(e.slides.indexOf(s), 0))
                },
                b = () => {
                    const t = e.params.a11y;
                    t.itemRoleDescriptionMessage && l(me(e.slides), t.itemRoleDescriptionMessage), t.slideRole && o(me(e.slides), t.slideRole);
                    const s = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
                    t.slideLabelMessage && e.slides.each(((i, r) => {
                        const a = me(i),
                            n = e.params.loop ? parseInt(a.attr("data-swiper-slide-index"), 10) : r;
                        d(a, t.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
                    }))
                };
            s("beforeInit", (() => {
                i = me(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
            })), s("afterInit", (() => {
                e.params.a11y.enabled && (() => {
                    const t = e.params.a11y;
                    e.$el.append(i);
                    const s = e.$el;
                    t.containerRoleDescriptionMessage && l(s, t.containerRoleDescriptionMessage), t.containerMessage && d(s, t.containerMessage);
                    const r = e.$wrapperEl,
                        a = t.id || r.attr("id") || `swiper-wrapper-${function (e = 16) { return "x".repeat(e).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16))) }(16)}`,
                        n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                    let o, h;
                    ! function (e, t) {
                        e.attr("id", t)
                    }(r, a),
                        function (e, t) {
                            e.attr("aria-live", t)
                        }(r, n), b(), e.navigation && e.navigation.$nextEl && (o = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (h = e.navigation.$prevEl), o && o.length && g(o, a, t.nextSlideMessage), h && h.length && g(h, a, t.prevSlideMessage), m() && e.pagination.$el.on("keydown", qe(e.params.pagination.bulletClass), p), e.$el.on("focus", x, !0), e.$el.on("pointerdown", f, !0), e.$el.on("pointerup", v, !0)
                })()
            })), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                e.params.a11y.enabled && b()
            })), s("fromEdge toEdge afterInit lock unlock", (() => {
                e.params.a11y.enabled && function () {
                    if (e.params.loop || e.params.rewind || !e.navigation) return;
                    const {
                        $nextEl: t,
                        $prevEl: s
                    } = e.navigation;
                    s && s.length > 0 && (e.isBeginning ? (h(s), n(s)) : (c(s), a(s))), t && t.length > 0 && (e.isEnd ? (h(t), n(t)) : (c(t), a(t)))
                }()
            })), s("paginationUpdate", (() => {
                e.params.a11y.enabled && function () {
                    const t = e.params.a11y;
                    u() && e.pagination.bullets.each((s => {
                        const i = me(s);
                        e.params.pagination.clickable && (a(i), e.params.pagination.renderBullet || (o(i, "button"), d(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)))), i.is(`.${e.params.pagination.bulletActiveClass}`) ? i.attr("aria-current", "true") : i.removeAttr("aria-current")
                    }))
                }()
            })), s("destroy", (() => {
                e.params.a11y.enabled && function () {
                    let t, s;
                    i && i.length > 0 && i.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", p), s && s.off("keydown", p), m() && e.pagination.$el.off("keydown", qe(e.params.pagination.bulletClass), p), e.$el.off("focus", x, !0), e.$el.off("pointerdown", f, !0), e.$el.off("pointerup", v, !0)
                }()
            }))
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1
                }
            });
            let i = !1,
                r = {};
            const a = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                n = e => {
                    const t = ne();
                    let s;
                    s = e ? new URL(e) : t.location;
                    const i = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                        r = i.length;
                    return {
                        key: i[r - 2],
                        value: i[r - 1]
                    }
                },
                o = (t, s) => {
                    const r = ne();
                    if (!i || !e.params.history.enabled) return;
                    let n;
                    n = e.params.url ? new URL(e.params.url) : r.location;
                    const o = e.slides.eq(s);
                    let l = a(o.attr("data-history"));
                    if (e.params.history.root.length > 0) {
                        let s = e.params.history.root;
                        "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), l = `${s}/${t}/${l}`
                    } else n.pathname.includes(t) || (l = `${t}/${l}`);
                    e.params.history.keepQuery && (l += n.search);
                    const d = r.history.state;
                    d && d.value === l || (e.params.history.replaceState ? r.history.replaceState({
                        value: l
                    }, null, l) : r.history.pushState({
                        value: l
                    }, null, l))
                },
                l = (t, s, i) => {
                    if (s)
                        for (let r = 0, n = e.slides.length; r < n; r += 1) {
                            const n = e.slides.eq(r);
                            if (a(n.attr("data-history")) === s && !n.hasClass(e.params.slideDuplicateClass)) {
                                const s = n.index();
                                e.slideTo(s, t, i)
                            }
                        } else e.slideTo(0, t, i)
                },
                d = () => {
                    r = n(e.params.url), l(e.params.speed, r.value, !1)
                };
            s("init", (() => {
                e.params.history.enabled && (() => {
                    const t = ne();
                    if (e.params.history) {
                        if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                        i = !0, r = n(e.params.url), (r.key || r.value) && (l(0, r.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", d))
                    }
                })()
            })), s("destroy", (() => {
                e.params.history.enabled && (() => {
                    const t = ne();
                    e.params.history.replaceState || t.removeEventListener("popstate", d)
                })()
            })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
                i && o(e.params.history.key, e.activeIndex)
            })), s("slideChange", (() => {
                i && e.params.cssMode && o(e.params.history.key, e.activeIndex)
            }))
        }, function ({
            swiper: e,
            extendParams: t,
            emit: s,
            on: i
        }) {
            let r = !1;
            const a = re(),
                n = ne();
            t({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            });
            const o = () => {
                s("hashChange");
                const t = a.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === s) return;
                    e.slideTo(s)
                }
            },
                l = () => {
                    if (r && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && n.history && n.history.replaceState) n.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), s("hashSet");
                        else {
                            const t = e.slides.eq(e.activeIndex),
                                i = t.attr("data-hash") || t.attr("data-history");
                            a.location.hash = i || "", s("hashSet")
                        }
                };
            i("init", (() => {
                e.params.hashNavigation.enabled && (() => {
                    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                    r = !0;
                    const t = a.location.hash.replace("#", "");
                    if (t) {
                        const s = 0;
                        for (let i = 0, r = e.slides.length; i < r; i += 1) {
                            const r = e.slides.eq(i);
                            if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(e.params.slideDuplicateClass)) {
                                const t = r.index();
                                e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                    e.params.hashNavigation.watchState && me(n).on("hashchange", o)
                })()
            })), i("destroy", (() => {
                e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && me(n).off("hashchange", o)
            })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
                r && l()
            })), i("slideChange", (() => {
                r && e.params.cssMode && l()
            }))
        }, function ({
            swiper: e,
            extendParams: t,
            on: s,
            emit: i
        }) {
            let r;

            function a() {
                if (!e.size) return e.autoplay.running = !1, void (e.autoplay.paused = !1);
                const t = e.slides.eq(e.activeIndex);
                let s = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = ge((() => {
                    let t;
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && a()
                }), s)
            }

            function n() {
                return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), a(), !0)
            }

            function o() {
                return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0)
            }

            function l(t) {
                e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                    e.$wrapperEl[0].addEventListener(t, h)
                })) : (e.autoplay.paused = !1, a())))
            }

            function d() {
                const t = re();
                "hidden" === t.visibilityState && e.autoplay.running && l(), "visible" === t.visibilityState && e.autoplay.paused && (a(), e.autoplay.paused = !1)
            }

            function h(t) {
                e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                    e.$wrapperEl[0].removeEventListener(t, h)
                })), e.autoplay.paused = !1, e.autoplay.running ? a() : o())
            }

            function c() {
                e.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), l()), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                    e.$wrapperEl[0].removeEventListener(t, h)
                }))
            }

            function p() {
                e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, i("autoplayResume"), a())
            }
            e.autoplay = {
                running: !1,
                paused: !1
            }, t({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), s("init", (() => {
                e.params.autoplay.enabled && (n(), re().addEventListener("visibilitychange", d), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", c), e.$el.on("mouseleave", p)))
            })), s("beforeTransitionStart", ((t, s, i) => {
                e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
            })), s("sliderFirstMove", (() => {
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : l())
            })), s("touchEnd", (() => {
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && a()
            })), s("destroy", (() => {
                e.$el.off("mouseenter", c), e.$el.off("mouseleave", p), e.autoplay.running && o(), re().removeEventListener("visibilitychange", d)
            })), Object.assign(e.autoplay, {
                pause: l,
                run: a,
                start: n,
                stop: o
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let i = !1,
                r = !1;

            function a() {
                const t = e.thumbs.swiper;
                if (!t || t.destroyed) return;
                const s = t.clickedIndex,
                    i = t.clickedSlide;
                if (i && me(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let r;
                if (r = t.params.loop ? parseInt(me(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
                    let t = e.activeIndex;
                    e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                    const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index(),
                        i = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();
                    r = void 0 === s ? i : void 0 === i ? s : i - t < t - s ? i : s
                }
                e.slideTo(r)
            }

            function n() {
                const {
                    thumbs: t
                } = e.params;
                if (i) return !1;
                i = !0;
                const s = e.constructor;
                if (t.swiper instanceof s) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
                else if (xe(t.swiper)) {
                    const i = Object.assign({}, t.swiper);
                    Object.assign(i, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), e.thumbs.swiper = new s(i), r = !0
                }
                return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", a), !0
            }

            function o(t) {
                const s = e.thumbs.swiper;
                if (!s || s.destroyed) return;
                const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                let r = 1;
                const a = e.params.thumbs.slideThumbActiveClass;
                if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (r = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), s.slides.removeClass(a), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                    for (let t = 0; t < r; t += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t}"]`).addClass(a);
                else
                    for (let t = 0; t < r; t += 1) s.slides.eq(e.realIndex + t).addClass(a);
                const n = e.params.thumbs.autoScrollOffset,
                    o = n && !s.params.loop;
                if (e.realIndex !== s.realIndex || o) {
                    let r, a, l = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(l).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, l = s.activeIndex);
                        const t = s.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                            i = s.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                        r = void 0 === t ? i : void 0 === i ? t : i - l == l - t ? s.params.slidesPerGroup > 1 ? i : l : i - l < l - t ? i : t, a = e.activeIndex > e.previousIndex ? "next" : "prev"
                    } else r = e.realIndex, a = r > e.previousIndex ? "next" : "prev";
                    o && (r += "next" === a ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > l ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > l && s.params.slidesPerGroup, s.slideTo(r, t ? 0 : void 0))
                }
            }
            e.thumbs = {
                swiper: null
            }, s("beforeInit", (() => {
                const {
                    thumbs: t
                } = e.params;
                t && t.swiper && (n(), o(!0))
            })), s("slideChange update resize observerUpdate", (() => {
                o()
            })), s("setTransition", ((t, s) => {
                const i = e.thumbs.swiper;
                i && !i.destroyed && i.setTransition(s)
            })), s("beforeDestroy", (() => {
                const t = e.thumbs.swiper;
                t && !t.destroyed && r && t.destroy()
            })), Object.assign(e.thumbs, {
                init: n,
                update: o
            })
        }, function ({
            swiper: e,
            extendParams: t,
            emit: s,
            once: i
        }) {
            t({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }), Object.assign(e, {
                freeMode: {
                    onTouchStart: function () {
                        const t = e.getTranslate();
                        e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
                            currentPos: e.rtl ? e.translate : -e.translate
                        })
                    },
                    onTouchMove: function () {
                        const {
                            touchEventsData: t,
                            touches: s
                        } = e;
                        0 === t.velocities.length && t.velocities.push({
                            position: s[e.isHorizontal() ? "startX" : "startY"],
                            time: t.touchStartTime
                        }), t.velocities.push({
                            position: s[e.isHorizontal() ? "currentX" : "currentY"],
                            time: fe()
                        })
                    },
                    onTouchEnd: function ({
                        currentPos: t
                    }) {
                        const {
                            params: r,
                            $wrapperEl: a,
                            rtlTranslate: n,
                            snapGrid: o,
                            touchEventsData: l
                        } = e, d = fe() - l.touchStartTime;
                        if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
                        else if (t > -e.maxTranslate()) e.slides.length < o.length ? e.slideTo(o.length - 1) : e.slideTo(e.slides.length - 1);
                        else {
                            if (r.freeMode.momentum) {
                                if (l.velocities.length > 1) {
                                    const t = l.velocities.pop(),
                                        s = l.velocities.pop(),
                                        i = t.position - s.position,
                                        a = t.time - s.time;
                                    e.velocity = i / a, e.velocity /= 2, Math.abs(e.velocity) < r.freeMode.minimumVelocity && (e.velocity = 0), (a > 150 || fe() - t.time > 300) && (e.velocity = 0)
                                } else e.velocity = 0;
                                e.velocity *= r.freeMode.momentumVelocityRatio, l.velocities.length = 0;
                                let t = 1e3 * r.freeMode.momentumRatio;
                                const d = e.velocity * t;
                                let h = e.translate + d;
                                n && (h = -h);
                                let c, p = !1;
                                const u = 20 * Math.abs(e.velocity) * r.freeMode.momentumBounceRatio;
                                let m;
                                if (h < e.maxTranslate()) r.freeMode.momentumBounce ? (h + e.maxTranslate() < -u && (h = e.maxTranslate() - u), c = e.maxTranslate(), p = !0, l.allowMomentumBounce = !0) : h = e.maxTranslate(), r.loop && r.centeredSlides && (m = !0);
                                else if (h > e.minTranslate()) r.freeMode.momentumBounce ? (h - e.minTranslate() > u && (h = e.minTranslate() + u), c = e.minTranslate(), p = !0, l.allowMomentumBounce = !0) : h = e.minTranslate(), r.loop && r.centeredSlides && (m = !0);
                                else if (r.freeMode.sticky) {
                                    let t;
                                    for (let e = 0; e < o.length; e += 1)
                                        if (o[e] > -h) {
                                            t = e;
                                            break
                                        } h = Math.abs(o[t] - h) < Math.abs(o[t - 1] - h) || "next" === e.swipeDirection ? o[t] : o[t - 1], h = -h
                                }
                                if (m && i("transitionEnd", (() => {
                                    e.loopFix()
                                })), 0 !== e.velocity) {
                                    if (t = n ? Math.abs((-h - e.translate) / e.velocity) : Math.abs((h - e.translate) / e.velocity), r.freeMode.sticky) {
                                        const s = Math.abs((n ? -h : h) - e.translate),
                                            i = e.slidesSizesGrid[e.activeIndex];
                                        t = s < i ? r.speed : s < 2 * i ? 1.5 * r.speed : 2.5 * r.speed
                                    }
                                } else if (r.freeMode.sticky) return void e.slideToClosest();
                                r.freeMode.momentumBounce && p ? (e.updateProgress(c), e.setTransition(t), e.setTranslate(h), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd((() => {
                                    e && !e.destroyed && l.allowMomentumBounce && (s("momentumBounce"), e.setTransition(r.speed), setTimeout((() => {
                                        e.setTranslate(c), a.transitionEnd((() => {
                                            e && !e.destroyed && e.transitionEnd()
                                        }))
                                    }), 0))
                                }))) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(h), e.setTransition(t), e.setTranslate(h), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd((() => {
                                    e && !e.destroyed && e.transitionEnd()
                                })))) : e.updateProgress(h), e.updateActiveIndex(), e.updateSlidesClasses()
                            } else {
                                if (r.freeMode.sticky) return void e.slideToClosest();
                                r.freeMode && s("_freeModeNoMomentumRelease")
                            } (!r.freeMode.momentum || d >= r.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                        }
                    }
                }
            })
        }, function ({
            swiper: e,
            extendParams: t
        }) {
            let s, i, r;
            t({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            }), e.grid = {
                initSlides: t => {
                    const {
                        slidesPerView: a
                    } = e.params, {
                        rows: n,
                        fill: o
                    } = e.params.grid;
                    i = s / n, r = Math.floor(t / n), s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n, "auto" !== a && "row" === o && (s = Math.max(s, a * n))
                },
                updateSlide: (t, a, n, o) => {
                    const {
                        slidesPerGroup: l,
                        spaceBetween: d
                    } = e.params, {
                        rows: h,
                        fill: c
                    } = e.params.grid;
                    let p, u, m;
                    if ("row" === c && l > 1) {
                        const e = Math.floor(t / (l * h)),
                            i = t - h * l * e,
                            r = 0 === e ? l : Math.min(Math.ceil((n - e * h * l) / h), l);
                        m = Math.floor(i / r), u = i - m * r + e * l, p = u + m * s / h, a.css({
                            "-webkit-order": p,
                            order: p
                        })
                    } else "column" === c ? (u = Math.floor(t / h), m = t - u * h, (u > r || u === r && m === h - 1) && (m += 1, m >= h && (m = 0, u += 1))) : (m = Math.floor(t / i), u = t - m * i);
                    a.css(o("margin-top"), 0 !== m ? d && `${d}px` : "")
                },
                updateWrapperSize: (t, i, r) => {
                    const {
                        spaceBetween: a,
                        centeredSlides: n,
                        roundLengths: o
                    } = e.params, {
                        rows: l
                    } = e.params.grid;
                    if (e.virtualSize = (t + a) * s, e.virtualSize = Math.ceil(e.virtualSize / l) - a, e.$wrapperEl.css({
                        [r("width")]: `${e.virtualSize + a}px`
                    }), n) {
                        i.splice(0, i.length);
                        const t = [];
                        for (let s = 0; s < i.length; s += 1) {
                            let r = i[s];
                            o && (r = Math.floor(r)), i[s] < e.virtualSize + i[0] && t.push(r)
                        }
                        i.push(...t)
                    }
                }
            }
        }, function ({
            swiper: e
        }) {
            Object.assign(e, {
                appendSlide: Ze.bind(e),
                prependSlide: Ke.bind(e),
                addSlide: Qe.bind(e),
                removeSlide: Je.bind(e),
                removeAllSlides: et.bind(e)
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            }), tt({
                effect: "fade",
                swiper: e,
                on: s,
                setTranslate: () => {
                    const {
                        slides: t
                    } = e, s = e.params.fadeEffect;
                    for (let i = 0; i < t.length; i += 1) {
                        const t = e.slides.eq(i);
                        let r = -t[0].swiperSlideOffset;
                        e.params.virtualTranslate || (r -= e.translate);
                        let a = 0;
                        e.isHorizontal() || (a = r, r = 0);
                        const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                        st(s, t).css({
                            opacity: n
                        }).transform(`translate3d(${r}px, ${a}px, 0px)`)
                    }
                },
                setTransition: t => {
                    const {
                        transformEl: s
                    } = e.params.fadeEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t), it({
                        swiper: e,
                        duration: t,
                        transformEl: s,
                        allSlides: !0
                    })
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            });
            const i = (e, t, s) => {
                let i = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    r = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === i.length && (i = me(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(i)), 0 === r.length && (r = me(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(r)), i.length && (i[0].style.opacity = Math.max(-t, 0)), r.length && (r[0].style.opacity = Math.max(t, 0))
            };
            tt({
                effect: "cube",
                swiper: e,
                on: s,
                setTranslate: () => {
                    const {
                        $el: t,
                        $wrapperEl: s,
                        slides: r,
                        width: a,
                        height: n,
                        rtlTranslate: o,
                        size: l,
                        browser: d
                    } = e, h = e.params.cubeEffect, c = e.isHorizontal(), p = e.virtual && e.params.virtual.enabled;
                    let u, m = 0;
                    h.shadow && (c ? (u = s.find(".swiper-cube-shadow"), 0 === u.length && (u = me('<div class="swiper-cube-shadow"></div>'), s.append(u)), u.css({
                        height: `${a}px`
                    })) : (u = t.find(".swiper-cube-shadow"), 0 === u.length && (u = me('<div class="swiper-cube-shadow"></div>'), t.append(u))));
                    for (let e = 0; e < r.length; e += 1) {
                        const t = r.eq(e);
                        let s = e;
                        p && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                        let a = 90 * s,
                            n = Math.floor(a / 360);
                        o && (a = -a, n = Math.floor(-a / 360));
                        const d = Math.max(Math.min(t[0].progress, 1), -1);
                        let u = 0,
                            g = 0,
                            f = 0;
                        s % 4 == 0 ? (u = 4 * -n * l, f = 0) : (s - 1) % 4 == 0 ? (u = 0, f = 4 * -n * l) : (s - 2) % 4 == 0 ? (u = l + 4 * n * l, f = l) : (s - 3) % 4 == 0 && (u = -l, f = 3 * l + 4 * l * n), o && (u = -u), c || (g = u, u = 0);
                        const v = `rotateX(${c ? 0 : -a}deg) rotateY(${c ? a : 0}deg) translate3d(${u}px, ${g}px, ${f}px)`;
                        d <= 1 && d > -1 && (m = 90 * s + 90 * d, o && (m = 90 * -s - 90 * d)), t.transform(v), h.slideShadows && i(t, d, c)
                    }
                    if (s.css({
                        "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                        "transform-origin": `50% 50% -${l / 2}px`
                    }), h.shadow)
                        if (c) u.transform(`translate3d(0px, ${a / 2 + h.shadowOffset}px, ${-a / 2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);
                        else {
                            const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                s = h.shadowScale,
                                i = h.shadowScale / t,
                                r = h.shadowOffset;
                            u.transform(`scale3d(${s}, 1, ${i}) translate3d(0px, ${n / 2 + r}px, ${-n / 2 / i}px) rotateX(-90deg)`)
                        } const g = d.isSafari || d.isWebView ? -l / 2 : 0;
                    s.transform(`translate3d(0px,0,${g}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
                },
                setTransition: t => {
                    const {
                        $el: s,
                        slides: i
                    } = e;
                    i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t)
                },
                recreateShadows: () => {
                    const t = e.isHorizontal();
                    e.slides.each((e => {
                        const s = Math.max(Math.min(e.progress, 1), -1);
                        i(me(e), s, t)
                    }))
                },
                getEffectParams: () => e.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                })
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0,
                    transformEl: null
                }
            });
            const i = (t, s, i) => {
                let r = e.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                    a = e.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                0 === r.length && (r = rt(i, t, e.isHorizontal() ? "left" : "top")), 0 === a.length && (a = rt(i, t, e.isHorizontal() ? "right" : "bottom")), r.length && (r[0].style.opacity = Math.max(-s, 0)), a.length && (a[0].style.opacity = Math.max(s, 0))
            };
            tt({
                effect: "flip",
                swiper: e,
                on: s,
                setTranslate: () => {
                    const {
                        slides: t,
                        rtlTranslate: s
                    } = e, r = e.params.flipEffect;
                    for (let a = 0; a < t.length; a += 1) {
                        const n = t.eq(a);
                        let o = n[0].progress;
                        e.params.flipEffect.limitRotation && (o = Math.max(Math.min(n[0].progress, 1), -1));
                        const l = n[0].swiperSlideOffset;
                        let d = -180 * o,
                            h = 0,
                            c = e.params.cssMode ? -l - e.translate : -l,
                            p = 0;
                        e.isHorizontal() ? s && (d = -d) : (p = c, c = 0, h = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(o)) + t.length, r.slideShadows && i(n, o, r);
                        const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${h}deg) rotateY(${d}deg)`;
                        st(r, n).transform(u)
                    }
                },
                setTransition: t => {
                    const {
                        transformEl: s
                    } = e.params.flipEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), it({
                        swiper: e,
                        duration: t,
                        transformEl: s
                    })
                },
                recreateShadows: () => {
                    const t = e.params.flipEffect;
                    e.slides.each((s => {
                        const r = me(s);
                        let a = r[0].progress;
                        e.params.flipEffect.limitRotation && (a = Math.max(Math.min(s.progress, 1), -1)), i(r, a, t)
                    }))
                },
                getEffectParams: () => e.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                    transformEl: null
                }
            }), tt({
                effect: "coverflow",
                swiper: e,
                on: s,
                setTranslate: () => {
                    const {
                        width: t,
                        height: s,
                        slides: i,
                        slidesSizesGrid: r
                    } = e, a = e.params.coverflowEffect, n = e.isHorizontal(), o = e.translate, l = n ? t / 2 - o : s / 2 - o, d = n ? a.rotate : -a.rotate, h = a.depth;
                    for (let e = 0, t = i.length; e < t; e += 1) {
                        const t = i.eq(e),
                            s = r[e],
                            o = (l - t[0].swiperSlideOffset - s / 2) / s,
                            c = "function" == typeof a.modifier ? a.modifier(o) : o * a.modifier;
                        let p = n ? d * c : 0,
                            u = n ? 0 : d * c,
                            m = -h * Math.abs(c),
                            g = a.stretch;
                        "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(a.stretch) / 100 * s);
                        let f = n ? 0 : g * c,
                            v = n ? g * c : 0,
                            x = 1 - (1 - a.scale) * Math.abs(c);
                        Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(p) < .001 && (p = 0), Math.abs(u) < .001 && (u = 0), Math.abs(x) < .001 && (x = 0);
                        const b = `translate3d(${v}px,${f}px,${m}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${x})`;
                        if (st(a, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(c)), a.slideShadows) {
                            let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = rt(a, t, n ? "left" : "top")), 0 === s.length && (s = rt(a, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = c > 0 ? c : 0), s.length && (s[0].style.opacity = -c > 0 ? -c : 0)
                        }
                    }
                },
                setTransition: t => {
                    const {
                        transformEl: s
                    } = e.params.coverflowEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0
                })
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const i = e => "string" == typeof e ? e : `${e}px`;
            tt({
                effect: "creative",
                swiper: e,
                on: s,
                setTranslate: () => {
                    const {
                        slides: t,
                        $wrapperEl: s,
                        slidesSizesGrid: r
                    } = e, a = e.params.creativeEffect, {
                        progressMultiplier: n
                    } = a, o = e.params.centeredSlides;
                    if (o) {
                        const t = r[0] / 2 - e.params.slidesOffsetBefore || 0;
                        s.transform(`translateX(calc(50% - ${t}px))`)
                    }
                    for (let s = 0; s < t.length; s += 1) {
                        const r = t.eq(s),
                            l = r[0].progress,
                            d = Math.min(Math.max(r[0].progress, -a.limitProgress), a.limitProgress);
                        let h = d;
                        o || (h = Math.min(Math.max(r[0].originalProgress, -a.limitProgress), a.limitProgress));
                        const c = r[0].swiperSlideOffset,
                            p = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
                            u = [0, 0, 0];
                        let m = !1;
                        e.isHorizontal() || (p[1] = p[0], p[0] = 0);
                        let g = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1
                        };
                        d < 0 ? (g = a.next, m = !0) : d > 0 && (g = a.prev, m = !0), p.forEach(((e, t) => {
                            p[t] = `calc(${e}px + (${i(g.translate[t])} * ${Math.abs(d * n)}))`
                        })), u.forEach(((e, t) => {
                            u[t] = g.rotate[t] * Math.abs(d * n)
                        })), r[0].style.zIndex = -Math.abs(Math.round(l)) + t.length;
                        const f = p.join(", "),
                            v = `rotateX(${u[0]}deg) rotateY(${u[1]}deg) rotateZ(${u[2]}deg)`,
                            x = h < 0 ? `scale(${1 + (1 - g.scale) * h * n})` : `scale(${1 - (1 - g.scale) * h * n})`,
                            b = h < 0 ? 1 + (1 - g.opacity) * h * n : 1 - (1 - g.opacity) * h * n,
                            w = `translate3d(${f}) ${v} ${x}`;
                        if (m && g.shadow || !m) {
                            let e = r.children(".swiper-slide-shadow");
                            if (0 === e.length && g.shadow && (e = rt(a, r)), e.length) {
                                const t = a.shadowPerProgress ? d * (1 / a.limitProgress) : d;
                                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                            }
                        }
                        const y = st(a, r);
                        y.transform(w).css({
                            opacity: b
                        }), g.origin && y.css("transform-origin", g.origin)
                    }
                },
                setTransition: t => {
                    const {
                        transformEl: s
                    } = e.params.creativeEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), it({
                        swiper: e,
                        duration: t,
                        transformEl: s,
                        allSlides: !0
                    })
                },
                perspective: () => e.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }, function ({
            swiper: e,
            extendParams: t,
            on: s
        }) {
            t({
                cardsEffect: {
                    slideShadows: !0,
                    transformEl: null,
                    rotate: !0,
                    perSlideRotate: 2,
                    perSlideOffset: 8
                }
            }), tt({
                effect: "cards",
                swiper: e,
                on: s,
                setTranslate: () => {
                    const {
                        slides: t,
                        activeIndex: s
                    } = e, i = e.params.cardsEffect, {
                        startTranslate: r,
                        isTouched: a
                    } = e.touchEventsData, n = e.translate;
                    for (let o = 0; o < t.length; o += 1) {
                        const l = t.eq(o),
                            d = l[0].progress,
                            h = Math.min(Math.max(d, -4), 4);
                        let c = l[0].swiperSlideOffset;
                        e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (c -= t[0].swiperSlideOffset);
                        let p = e.params.cssMode ? -c - e.translate : -c,
                            u = 0;
                        const m = -100 * Math.abs(h);
                        let g = 1,
                            f = -i.perSlideRotate * h,
                            v = i.perSlideOffset - .75 * Math.abs(h);
                        const x = e.virtual && e.params.virtual.enabled ? e.virtual.from + o : o,
                            b = (x === s || x === s - 1) && h > 0 && h < 1 && (a || e.params.cssMode) && n < r,
                            w = (x === s || x === s + 1) && h < 0 && h > -1 && (a || e.params.cssMode) && n > r;
                        if (b || w) {
                            const e = (1 - Math.abs((Math.abs(h) - .5) / .5)) ** .5;
                            f += -28 * h * e, g += -.5 * e, v += 96 * e, u = -25 * e * Math.abs(h) + "%"
                        }
                        if (p = h < 0 ? `calc(${p}px + (${v * Math.abs(h)}%))` : h > 0 ? `calc(${p}px + (-${v * Math.abs(h)}%))` : `${p}px`, !e.isHorizontal()) {
                            const e = u;
                            u = p, p = e
                        }
                        const y = h < 0 ? "" + (1 + (1 - g) * h) : "" + (1 - (1 - g) * h),
                            _ = `\n        translate3d(${p}, ${u}, ${m}px)\n        rotateZ(${i.rotate ? f : 0}deg)\n        scale(${y})\n      `;
                        if (i.slideShadows) {
                            let e = l.find(".swiper-slide-shadow");
                            0 === e.length && (e = rt(i, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(h) - .5) / .5, 0), 1))
                        }
                        l[0].style.zIndex = -Math.abs(Math.round(d)) + t.length, st(i, l).transform(_)
                    }
                },
                setTransition: t => {
                    const {
                        transformEl: s
                    } = e.params.cardsEffect;
                    (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), it({
                        swiper: e,
                        duration: t,
                        transformEl: s
                    })
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }];
        Xe.use(at);
        var nt = s(473),
            ot = s.n(nt),
            lt = s(154),
            dt = s.n(lt);
        document.addEventListener("DOMContentLoaded", (function () {
            var e, t;
            e = new (ot())(".ukiyo", {
                externalRAF: !0
            }), t = new (dt())({
                duration: 1,
                smoothWheel: !0,
                smoothTouch: !1,
                normalizeWheel: !0
            }), requestAnimationFrame((function s(i) {
                e.animate(), t.raf(i), requestAnimationFrame(s)
            })), new Xe(".ms_03 .swiper_jj", {
                speed: 1400,
                slidesPerView: 1,
                allowTouchMove: !1,
                loopAdditionalSlides: 1,
                on: {
                    init: function (e) {
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || function (e) {
                            var t = document.querySelectorAll(".hellojj_slide");
                            if (document.querySelector("#jjcanvas_02").style.cssText = "width:calc( 100% + ".concat(e.virtualSize, "px );height:100%;"), t.length) {
                                var s = new c({
                                    container: "jjcanvas_02",
                                    premultipliedAlpha: !0
                                }),
                                    i = {
                                        vertexShader: "\n  precision mediump float;\n      \n  attribute vec3 aVertexPosition;\n  attribute vec2 aTextureCoord;\n\n  uniform mat4 uMVMatrix;\n  uniform mat4 uPMatrix;\n\n  uniform mat4 planeTextureMatrix;\n\n  varying vec3 vVertexPosition;\n  varying vec2 vTextureCoord;\n\n  void main() {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n\n      // varyings\n      vVertexPosition = aVertexPosition;\n      vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n  }\n  ",
                                        fragmentShader: "\nprecision mediump float;\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D planeTexture;\nuniform float uTime;\n\nvoid main() {\n  float angle = mod(uTime * 0.05, 360.0); \n  float radians = radians(angle);\n  float cosTheta = cos(radians);\n  float sinTheta = sin(radians);\n  mat2 rotationMatrix = mat2(cosTheta, -sinTheta, sinTheta, cosTheta);\n\n  vec2 textureCoord = vTextureCoord;\n  vec2 dir = textureCoord - vec2(0.5);\n  float dist = distance(textureCoord, vec2(0.5));\n\n  vec2 rotatedCoord = textureCoord - 0.5;\n  rotatedCoord = rotationMatrix * rotatedCoord;\n  rotatedCoord += 0.5;\n\n  // Precompute sin term to avoid redundant computation\n  float sinTerm = sin(dist * 40.0 - uTime * 0.1) + 0.5;\n  vec2 offset = dir * sinTerm * 0.005;\n  rotatedCoord += offset;\n\n  gl_FragColor = texture2D(planeTexture, rotatedCoord);\n}\n\n  ",
                                        uniforms: {
                                            time: {
                                                name: "uTime",
                                                type: "1f",
                                                value: 0
                                            }
                                        }
                                    };
                                t.forEach((function (e, r) {
                                    e.querySelector("img") && e.querySelector("img").setAttribute("data-sampler", "planeTexture");
                                    var a = new ee(s, t[r], i);
                                    a.onRender((function (e) {
                                        a.uniforms.time.value++
                                    })), e.querySelector("img") && e.querySelector("img").remove()
                                }))
                            }
                        }(e)
                    },
                    slideChangeTransitionStart: function (e) {
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (document.querySelector("#jjcanvas_02").classList.add("event_show"), document.querySelector("#jjcanvas_02").style.transform = "translate3d(".concat(e.translate, "px, 0px, 0px)"))
                    },
                    slideChangeTransitionEnd: function (e) {
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || document.querySelector("#jjcanvas_02").classList.remove("event_show")
                    }
                },
                navigation: {
                    nextEl: ".ms_03 .swiper-btn-r",
                    prevEl: ".ms_03 .swiper-btn-l"
                }
            }), new Xe(".ms_03 .swiper_text", {
                speed: 800,
                slidesPerView: 1,
                allowTouchMove: !1,
                loopAdditionalSlides: 1,
                on: {},
                navigation: {
                    nextEl: ".ms_03 .swiper-btn-r",
                    prevEl: ".ms_03 .swiper-btn-l"
                }
            }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? this.documentElement.querySelectorAll("body .hello_jj_wrap .hellojj img", "body .hellojj_bg").forEach((function (e, t) {
                e.style.opacity = 1, e.style.display = "block"
            })) : (function () {
                if (!document.querySelector("#jjcanvas")) {
                    var e = document.createElement("div");
                    e.setAttribute("id", "jjcanvas"), e.style.cssText = "position: fixed;inset:0; z-index: 1; pointer-events:none;", document.querySelector("body").appendChild(e)
                }
                var t = document.querySelectorAll(".hellojj");
                if (t.length > 0) {
                    var s = new c({
                        container: "jjcanvas",
                        premultipliedAlpha: !0
                    }),
                        i = {
                            vertexShader: "\n  precision mediump float;\n      \n  attribute vec3 aVertexPosition;\n  attribute vec2 aTextureCoord;\n\n  uniform mat4 uMVMatrix;\n  uniform mat4 uPMatrix;\n\n  uniform mat4 planeTextureMatrix;\n\n  varying vec3 vVertexPosition;\n  varying vec2 vTextureCoord;\n\n  void main() {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n\n      // varyings\n      vVertexPosition = aVertexPosition;\n      vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n  }\n  ",
                            fragmentShader: "\nprecision mediump float;\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D planeTexture;\nuniform float uTime;\n\nvoid main() {\n  float angle = mod(uTime * 0.05, 360.0); \n  float radians = radians(angle);\n  float cosTheta = cos(radians);\n  float sinTheta = sin(radians);\n  mat2 rotationMatrix = mat2(cosTheta, -sinTheta, sinTheta, cosTheta);\n\n  vec2 textureCoord = vTextureCoord;\n  vec2 dir = textureCoord - vec2(0.5);\n  float dist = distance(textureCoord, vec2(0.5));\n\n  vec2 rotatedCoord = textureCoord - 0.5;\n  rotatedCoord = rotationMatrix * rotatedCoord;\n  rotatedCoord += 0.5;\n\n  // Precompute sin term to avoid redundant computation\n  float sinTerm = sin(dist * 40.0 - uTime * 0.1) + 0.5;\n  vec2 offset = dir * sinTerm * 0.005;\n  rotatedCoord += offset;\n\n  gl_FragColor = texture2D(planeTexture, rotatedCoord);\n}\n\n  ",
                            uniforms: {
                                time: {
                                    name: "uTime",
                                    type: "1f",
                                    value: 0
                                }
                            }
                        };
                    t.forEach((function (e, r) {
                        e.querySelector("img") && e.querySelector("img").setAttribute("data-sampler", "planeTexture");
                        var a = new ee(s, t[r], i);
                        a.onRender((function (e) {
                            a.uniforms.time.value++
                        })), e.querySelector("img") && e.querySelector("img").remove()
                    }))
                }
            }(), function () {
                // if (!document.querySelector("#jjcanvas_bg")) {
                //     var e = document.createElement("div");
                //     e.setAttribute("id", "jjcanvas_bg"), document.querySelector(".side").appendChild(e)
                // }
                // var t = document.querySelectorAll(".hellojj_bg");
                // if (t.length > 0) {
                //     var s = new c({
                //         container: "jjcanvas_bg",
                //         premultipliedAlpha: 0
                //     }),
                //         i = {
                //             vertexShader: "\n  precision mediump float;\n      \n  attribute vec3 aVertexPosition;\n  attribute vec2 aTextureCoord;\n\n  uniform mat4 uMVMatrix;\n  uniform mat4 uPMatrix;\n\n  uniform mat4 planeTextureMatrix;\n\n  varying vec3 vVertexPosition;\n  varying vec2 vTextureCoord;\n\n  void main() {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n\n      // varyings\n      vVertexPosition = aVertexPosition;\n      vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n  }\n  ",
                //             fragmentShader: "\nprecision mediump float;\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D planeTexture;\nuniform float uTime;\n\nvoid main() {\n  float angle = mod(uTime * 0.05, 360.0); \n  float radians = radians(angle);\n  float cosTheta = cos(radians);\n  float sinTheta = sin(radians);\n  mat2 rotationMatrix = mat2(cosTheta, -sinTheta, sinTheta, cosTheta);\n\n  vec2 textureCoord = vTextureCoord;\n  vec2 dir = textureCoord - vec2(0.5);\n  float dist = distance(textureCoord, vec2(0.5));\n\n  vec2 rotatedCoord = textureCoord - 0.5;\n  rotatedCoord = rotationMatrix * rotatedCoord;\n  rotatedCoord += 0.5;\n\n  // Precompute sin term to avoid redundant computation\n  float sinTerm = sin(dist * 40.0 - uTime * 0.1) + 0.5;\n  vec2 offset = dir * sinTerm * 0.005;\n  rotatedCoord += offset;\n\n  gl_FragColor = texture2D(planeTexture, rotatedCoord);\n}\n\n  ",
                //             uniforms: {
                //                 time: {
                //                     name: "uTime",
                //                     type: "1f",
                //                     value: 1
                //                 }
                //             }
                //         };
                //     t.forEach((function (e, r) {
                //         e.querySelector("img") && e.querySelector("img").setAttribute("data-sampler", "planeTexture");
                //         var a = new ee(s, t[r], i);
                //         a.onRender((function (e) {
                //             a.uniforms.time.value++
                //         })), e.querySelector("img") && e.querySelector("img").remove()
                //     }))
                // }
            }())
        }))
    })()
})();
