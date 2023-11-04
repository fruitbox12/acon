(window.webpackJsonp = window.webpackJsonp || []).push([
    ["app"],
    {
        0: function (e, t, r) {
            e.exports = r("cd49");
        },
        "034f": function (e, t, r) {
            "use strict";
            r("5a56");
        },
        1: function (e, t) {},
        "15a0": function (e, t, r) {
            "use strict";
            r.d(t, "b", function () {
                return O;
            });
            var a = r("b85c"),
                n = r("1da1"),
                o = (r("d3b7"), r("4de4"), r("2ca0"), r("caad"), r("2532"), r("3ca3"), r("ddb0"), r("7db0"), r("a434"), r("07ac"), r("99af"), r("fb6a"), r("25f0"), r("ac1f"), r("1276"), r("b0c0"), r("5319"), r("96cf"), r("29eb")),
                i = r("5b7f"),
                c = r("a0c6"),
                s = r("90e8"),
                l = r("4ed2"),
                u = r("33f9"),
                d = r("a3e4"),
                p = r("bc3a"),
                m = r.n(p),
                h = "taubyte_",
                f = "https://github.com/taubyte-test/tb_templates",
                b = "https://github.com/taubyte/assemblyscript-sdk",
                g = {
                    fetch: {
                        depth: 1e3,
                    },
                    log: {
                        depth: 1e3,
                        since: 0,
                    },
                };

            function w(e, t) {
                if ("github" == e) return "https://github.com/" + t;
                throw new Error("Unknown provider: " + e);
            }

            function x(e) {
                var t = window.localStorage.getItem(h + e);
                return "null" == t ? null : t;
            }

            function v(e, t) {
                window.localStorage.setItem(h + e, t);
            }

            function y() {
                return (
                    (y = Object(n.a)(
                        regeneratorRuntime.mark(function e(t) {
                            var r;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (((t = h + t), (r = window.localStorage.getItem(t)), "null" != r)) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw (window.localStorage.removeItem(t), new Error("value from key: ".concat(t, " is null")));
                                        case 5:
                                            if (0 != r.length) {
                                                e.next = 7;
                                                break;
                                            }
                                            throw new Error("value from key: ".concat(t, " is empty"));
                                        case 7:
                                            return e.abrupt("return", r);
                                        case 8:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    y.apply(this, arguments)
                );
            }

            function j() {
                var e = x("dreamland-enabled");
                (this.darkModeType = localStorage.getItem("variant")), (this.leftSidebarType = localStorage.getItem("leftSideTheme")), (this.isActive = localStorage.getItem("isActive")), (this.url = localStorage.getItem("mapUrl"));
                var t = x("network-history");
                window.localStorage.clear(),
                    v("dreamland-enabled", e),
                    v("network-history", t),
                    localStorage.setItem("variant", this.darkModeType),
                    localStorage.setItem("leftSideTheme", this.leftSidebarType),
                    localStorage.setItem("isActive", this.isActive),
                    localStorage.setItem("mapUrl", this.url),
                    (window.storeInitialized = false),
                    (window.userRepos = void 0),
                    (window.project = {
                        code_repo: void 0,
                        config_repo: void 0,
                        code_seer: void 0,
                        config_seer: void 0,
                        id: void 0,
                        branch: {
                            default: void 0,
                            current: void 0,
                            options: [],
                        },
                        checkout: (function () {
                            var e = Object(n.a)(
                                regeneratorRuntime.mark(function e() {
                                    return regeneratorRuntime.wrap(function (e) {
                                        while (1)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return t;
                        })(),
                    });
            }

            function C() {
                return (
                    (C = Object(n.a)(
                        regeneratorRuntime.mark(function e(t, r) {
                            var a, u, d, p, h, f, b, k, y, j, R, C, A;
                            return regeneratorRuntime.wrap(
                                function (e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), Object(l.d)();
                                            case 2:
                                                return (a = e.sent), v("project_id", r), (e.next = 6), Object(l.a)();
                                            case 6:
                                                if (((p = e.sent), (h = x("network")), (e.prev = 8), h.includes("Dreamland"))) {
                                                    e.next = 17;
                                                    break;
                                                }
                                                return (
                                                    (e.next = 12),
                                                    m()({
                                                        method: "GET",
                                                        url: "https://console.taubyte.com/projects/".concat(r),
                                                        headers: {
                                                            "X-Network-Auth": p,
                                                            Authorization: "github ".concat(x("token")),
                                                        },
                                                    })
                                                );
                                            case 12:
                                                (u = e.sent), v("project_name", u.data.project.name), (d = "jwt " + u.data.project.cors.token), (e.next = 21);
                                                break;
                                            case 17:
                                                return (e.next = 19), window.tpm.project(r);
                                            case 19:
                                                (u = e.sent), v("project_name", u.project.name);
                                            case 21:
                                                e.next = 28;
                                                break;
                                            case 23:
                                                throw (
                                                    ((e.prev = 23),
                                                    (e.t0 = e.catch(8)),
                                                    console.log("Fetching project information failed with:", e.t0),
                                                    t.$router.push({
                                                        path: "/error/projectfetch",
                                                    }),
                                                    e.t0)
                                                );
                                            case 28:
                                                return (
                                                    (b = new o.a()),
                                                    (k = new o.a()),
                                                    h.includes("Dreamland")
                                                        ? ((f = u.project.repositories), b.addHeader("Authorization", "github ".concat(x("token"))), k.addHeader("Authorization", "github ".concat(x("token"))))
                                                        : ((f = u.data.project.Repositories), b.addHeader("Authorization", d), k.addHeader("Authorization", d)),
                                                    (y = new o.b(b)),
                                                    (j = new o.b(k)),
                                                    (e.prev = 33),
                                                    (e.next = 36),
                                                    Promise.all([
                                                        b.clone({
                                                            url: w(f.provider, f.configuration.fullname),
                                                            corsProxy: a,
                                                            singleBranch: false,
                                                        }),
                                                        k.clone({
                                                            url: w(f.provider, f.code.fullname),
                                                            corsProxy: a,
                                                            singleBranch: false,
                                                        }),
                                                    ])
                                                );
                                            case 36:
                                                e.next = 43;
                                                break;
                                            case 38:
                                                throw (
                                                    ((e.prev = 38),
                                                    (e.t1 = e.catch(33)),
                                                    s.a.$emit("notify", {
                                                        value: "Cloning project failed with: " + e.t1,
                                                        status: "danger",
                                                    }),
                                                    t.$router.push({
                                                        path: "/error/clonefailure",
                                                    }),
                                                    e.t1)
                                                );
                                            case 43:
                                                return (
                                                    (e.prev = 43),
                                                    (e.next = 46),
                                                    Promise.all([
                                                        b.fetch(g.fetch).then(function (e) {
                                                            R = e.defaultBranch;
                                                        }),
                                                        k.fetch(g.fetch),
                                                    ])
                                                );
                                            case 46:
                                                e.next = 52;
                                                break;
                                            case 48:
                                                throw (
                                                    ((e.prev = 48),
                                                    (e.t2 = e.catch(43)),
                                                    s.a.$emit("notify", {
                                                        value: "Fetching from git failed with: " + e.t2,
                                                        status: "danger",
                                                    }),
                                                    e.t2)
                                                );
                                            case 52:
                                                if ((null == R && (R = ""), (C = x("currentBranch")), void 0 != C && 0 != C.length)) {
                                                    e.next = 58;
                                                    break;
                                                }
                                                (C = R), (e.next = 61);
                                                break;
                                            case 58:
                                                return (
                                                    (A = {
                                                        ref: C,
                                                        noUpdateHead: false,
                                                    }),
                                                    (e.next = 61),
                                                    Promise.all([b.checkout(A), k.checkout(A)]).catch(function (e) {
                                                        s.a.$emit("notify", {
                                                            value: "Checkout branch " + C + " failed with: " + e,
                                                            status: "danger",
                                                        });
                                                    })
                                                );
                                            case 61:
                                                return (e.prev = 61), (e.next = 64), Promise.all([y.init(), j.init()]);
                                            case 64:
                                                e.next = 71;
                                                break;
                                            case 66:
                                                throw (
                                                    ((e.prev = 66),
                                                    (e.t3 = e.catch(61)),
                                                    console.log("Init seer failed with ", e.t3),
                                                    t.$router.push({
                                                        path: "/error/projectfetch",
                                                    }),
                                                    e.t3)
                                                );
                                            case 71:
                                                return (e.t4 = i.a), (e.next = 74), Object(l.g)();
                                            case 74:
                                                return (e.t5 = e.sent), (e.t6 = x("token")), (window.patrick = new e.t4(e.t5, "github", e.t6)), (e.t7 = c.a), (e.next = 80), Object(l.f)();
                                            case 80:
                                                (e.t8 = e.sent),
                                                    (e.t9 = x("token")),
                                                    (window.globals = new e.t7(e.t8, "github", e.t9)),
                                                    (window.project = {
                                                        config_repo: b,
                                                        config_seer: y,
                                                        code_repo: k,
                                                        code_seer: j,
                                                        id: r,
                                                        branch: {
                                                            default: R.replace("refs/heads/", ""),
                                                            current: C.replace("refs/heads/", ""),
                                                            options: [],
                                                        },
                                                        checkout: (function () {
                                                            var e = Object(n.a)(
                                                                regeneratorRuntime.mark(function e(t, r) {
                                                                    return regeneratorRuntime.wrap(function (e) {
                                                                        while (1)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (
                                                                                        (e.next = 2),
                                                                                        Promise.all([
                                                                                            b
                                                                                                .checkout({
                                                                                                    ref: t,
                                                                                                    noUpdateHead: false,
                                                                                                    force: r,
                                                                                                })
                                                                                                .catch(function (e) {
                                                                                                    throw (
                                                                                                        (s.a.$emit("notify", {
                                                                                                            value: "Checkout config branch " + t + " failed with: " + e,
                                                                                                            status: "danger",
                                                                                                        }),
                                                                                                        e)
                                                                                                    );
                                                                                                }),
                                                                                            k
                                                                                                .checkout({
                                                                                                    ref: t,
                                                                                                    noUpdateHead: false,
                                                                                                    force: r,
                                                                                                })
                                                                                                .catch(function (e) {
                                                                                                    throw (
                                                                                                        (s.a.$emit("notify", {
                                                                                                            value: "Checkout code branch " + t + " failed with: " + e,
                                                                                                            status: "danger",
                                                                                                        }),
                                                                                                        e)
                                                                                                    );
                                                                                                }),
                                                                                        ]).then(
                                                                                            Object(n.a)(
                                                                                                regeneratorRuntime.mark(function e() {
                                                                                                    return regeneratorRuntime.wrap(function (e) {
                                                                                                        while (1)
                                                                                                            switch ((e.prev = e.next)) {
                                                                                                                case 0:
                                                                                                                    return (e.next = 2), Promise.all([window.project.config_seer.init(), window.project.code_seer.init()]);
                                                                                                                case 2:
                                                                                                                    (window.project.branch.current = t), v("currentBranch", t.replace("refs/heads/", "")), O();
                                                                                                                case 5:
                                                                                                                case "end":
                                                                                                                    return e.stop();
                                                                                                            }
                                                                                                    }, e);
                                                                                                })
                                                                                            )
                                                                                        )
                                                                                    );
                                                                                case 2:
                                                                                case "end":
                                                                                    return e.stop();
                                                                            }
                                                                    }, e);
                                                                })
                                                            );
                                                            return t;
                                                        })(),
                                                    }),
                                                    O();
                                            case 85:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [
                                    [8, 23],
                                    [33, 38],
                                    [43, 48],
                                    [61, 66],
                                ]
                            );
                        })
                    )),
                    C.apply(this, arguments)
                );
            }

            function A() {
                var e = x("token_exp");
                if (void 0 != e) {
                    var t = new Date(),
                        r = new Date(e);
                    if (r > t) return true;
                }
                return false;
            }

            function _() {
                return (
                    (_ = Object(n.a)(
                        regeneratorRuntime.mark(function e(t) {
                            var r, a;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (((r = x("token")), !r)) {
                                                e.next = 12;
                                                break;
                                            }
                                            if (0 != A()) {
                                                e.next = 7;
                                                break;
                                            }
                                            throw (
                                                (t.$router.push({
                                                    path: "/error/token_expired",
                                                }),
                                                new Error("Token expired"))
                                            );
                                        case 7:
                                            if (((a = x("project_id")), !a)) {
                                                e.next = 12;
                                                break;
                                            }
                                            return (e.next = 11), C.apply(this, arguments);
                                        case 11:
                                            window.storeInitialized = true;
                                        case 12:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    _.apply(this, arguments)
                );
            }

            function O() {
                (window.project.config_seer.changed = false),
                    (window.project.code_seer.changed = false),
                    (window.resourceCounts = {
                        applications: {
                            org: 0,
                            add: 0,
                            del: 0,
                        },
                        local: {},
                        global: {
                            functions: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            libraries: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            websites: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            storages: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            messaging: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            databases: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            domains: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            services: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                            smartops: {
                                org: 0,
                                add: 0,
                                del: 0,
                            },
                        },
                    }),
                    E();
            }

            function E() {
                var e = window.resourceCounts;
                for (var t in window.project.config_seer.file_cache) {
                    var r = t.split("/");
                    if (3 == r.length) {
                        var a = r[1];
                        void 0 != e.global[a] && e.global[a].org++;
                    }
                    if ((4 == r.length && "applications" == r[1] && e.applications.org++, 5 == r.length && "applications" == r[1])) {
                        var n = r[3],
                            o = r[2];
                        void 0 != e.global[n] &&
                            (void 0 == e.local[o] &&
                                (e.local[o] = {
                                    org: 0,
                                    add: 0,
                                    del: 0,
                                }),
                            void 0 == e.local[o][n]
                                ? (e.local[o][n] = {
                                      org: 1,
                                      add: 0,
                                      del: 0,
                                  })
                                : e.local[o][n].org++);
                    }
                }
            }
            (window.project = {
                code_repo: void 0,
                config_repo: void 0,
                code_seer: void 0,
                config_seer: void 0,
                id: void 0,
                branch: {
                    default: void 0,
                    current: void 0,
                    options: [],
                },
                checkout: (function () {
                    var e = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return t;
                })(),
            }),
                (window.getOrCloneTemplatesRepo = Object(n.a)(
                    regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function (e) {
                            while (1)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (void 0 == window.templates_repo) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return", window.templates_repo);
                                    case 2:
                                        return (
                                            (window.templates_repo = new o.a({
                                                wipe: true,
                                                corsProxy: window.project.config_repo.httpStruct.corsProxy,
                                            })),
                                            (t = window.project.config_repo.headers.Authorization),
                                            window.templates_repo.addHeader("Authorization", t),
                                            (e.next = 7),
                                            window.templates_repo
                                                .clone({
                                                    url: f,
                                                })
                                                .catch(function (e) {
                                                    throw new Error("There was an error cloning the templates Repo with: ".concat(e));
                                                })
                                        );
                                    case 7:
                                        return e.abrupt("return", window.templates_repo);
                                    case 8:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )),
                (window.getOrCloneSDKRepo = Object(n.a)(
                    regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function (e) {
                            while (1)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (void 0 == window.sdkRepo) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return", window.sdkRepo);
                                    case 2:
                                        return (
                                            (window.sdkRepo = new o.a({
                                                wipe: true,
                                                corsProxy: window.project.config_repo.httpStruct.corsProxy,
                                            })),
                                            (t = window.project.config_repo.headers.Authorization),
                                            window.sdkRepo.addHeader("Authorization", t),
                                            (e.next = 7),
                                            window.sdkRepo
                                                .clone({
                                                    url: b,
                                                    ref: "main",
                                                })
                                                .catch(function (e) {
                                                    throw new Error("There was an error cloning the sdk Repo with: ".concat(e));
                                                })
                                        );
                                    case 7:
                                        return e.abrupt("return", window.sdkRepo);
                                    case 8:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )),
                (window.tryAddAssemblyScriptToMonaco = Object(n.a)(
                    regeneratorRuntime.mark(function e() {
                        var t, r, o, i, c;
                        return regeneratorRuntime.wrap(
                            function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (!u.languages.typescript.typescriptDefaults.getExtraLibs().length) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return (
                                                u.languages.typescript.typescriptDefaults.setCompilerOptions({
                                                    target: u.languages.typescript.ScriptTarget.ESNext,
                                                    allowNonTsExtensions: true,
                                                    moduleResolution: u.languages.typescript.ModuleResolutionKind.NodeJs,
                                                    module: u.languages.typescript.ModuleKind.CommonJS,
                                                    noEmit: true,
                                                    noLib: true,
                                                    allowJs: false,
                                                    baseUrl: ".",
                                                    strict: true,
                                                    alwaysStrict: true,
                                                    noImplicitAny: true,
                                                    noImplicitReturns: true,
                                                    noImplicitThis: true,
                                                    noEmitOnError: true,
                                                    strictNullChecks: true,
                                                    experimentalDecorators: true,
                                                    preserveConstEnums: false,
                                                    downlevelIteration: true,
                                                }),
                                                d.a.init().then(
                                                    (function () {
                                                        var e = Object(n.a)(
                                                            regeneratorRuntime.mark(function e(t) {
                                                                var r;
                                                                return regeneratorRuntime.wrap(function (e) {
                                                                    while (1)
                                                                        switch ((e.prev = e.next)) {
                                                                            case 0:
                                                                                return (e.next = 2), fetch("https://cdn.jsdelivr.net/npm/assemblyscript/std/assembly/index.d.ts");
                                                                            case 2:
                                                                                return (r = e.sent), (e.t0 = t.languages.typescript.typescriptDefaults), (e.next = 6), r.text();
                                                                            case 6:
                                                                                (e.t1 = e.sent), e.t0.addExtraLib.call(e.t0, e.t1, "assembly/index.d.ts");
                                                                            case 8:
                                                                            case "end":
                                                                                return e.stop();
                                                                        }
                                                                }, e);
                                                            })
                                                        );
                                                        return function (t) {
                                                            return e.apply(this, arguments);
                                                        };
                                                    })()
                                                ),
                                                (e.next = 6),
                                                window.getOrCloneSDKRepo()
                                            );
                                        case 6:
                                            return (t = e.sent), (e.next = 9), t.walk();
                                        case 9:
                                            (r = e.sent),
                                                (r = r.filter(function (e) {
                                                    return !e.path.startsWith(".") && !!e.path.includes("/");
                                                })),
                                                (o = Object(a.a)(r)),
                                                (e.prev = 12),
                                                (c = regeneratorRuntime.mark(function e() {
                                                    var t;
                                                    return regeneratorRuntime.wrap(function (e) {
                                                        while (1)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (
                                                                        (t = i.value),
                                                                        (e.next = 3),
                                                                        t.now.content().then(function (e) {
                                                                            u.languages.typescript.typescriptDefaults.addExtraLib(new TextDecoder("utf-8").decode(e), "sdk/".concat(t.path));
                                                                        })
                                                                    );
                                                                case 3:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })),
                                                o.s();
                                        case 15:
                                            if ((i = o.n()).done) {
                                                e.next = 19;
                                                break;
                                            }
                                            return e.delegateYield(c(), "t0", 17);
                                        case 17:
                                            e.next = 15;
                                            break;
                                        case 19:
                                            e.next = 24;
                                            break;
                                        case 21:
                                            (e.prev = 21), (e.t1 = e.catch(12)), o.e(e.t1);
                                        case 24:
                                            return (e.prev = 24), o.f(), e.finish(24);
                                        case 27:
                                            u.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
                                                noSemanticValidation: false,
                                                noSyntaxValidation: false,
                                            });
                                        case 28:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[12, 21, 24, 27]]
                        );
                    })
                )),
                (window.getTemplateSeer = Object(n.a)(
                    regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            while (1)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (void 0 == window.templates_seer) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return", window.templates_seer);
                                    case 2:
                                        return (e.t0 = o.b), (e.next = 5), window.getOrCloneTemplatesRepo();
                                    case 5:
                                        return (e.t1 = e.sent), (window.templates_seer = new e.t0(e.t1)), (e.next = 9), window.templates_seer.init();
                                    case 9:
                                        return e.abrupt("return", window.templates_seer);
                                    case 10:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )),
                (window.getOrFetchUserRepos = Object(n.a)(
                    regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function (e) {
                            while (1)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (void 0 != window.userRepos) {
                                            e.next = 4;
                                            break;
                                        }
                                        return (e.next = 3), window.tpm.listUserRepositories();
                                    case 3:
                                        window.userRepos = e.sent;
                                    case 4:
                                        return e.abrupt("return", window.userRepos);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )),
                (window.regenerateUserRepos = Object(n.a)(
                    regeneratorRuntime.mark(function e() {
                        var t, r, n, o, i, c, s;
                        return regeneratorRuntime.wrap(function (e) {
                            while (1)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (e.next = 2), window.tpm.listUserRepositories();
                                    case 2:
                                        (t = e.sent), (r = Object(a.a)(t));
                                        try {
                                            for (
                                                o = function () {
                                                    var e = n.value,
                                                        t = window.userRepos.find(function (t) {
                                                            return t.id == e.id;
                                                        });
                                                    void 0 == t && window.userRepos.push(e);
                                                },
                                                    r.s();
                                                !(n = r.n()).done;

                                            )
                                                o();
                                        } catch (l) {
                                            r.e(l);
                                        } finally {
                                            r.f();
                                        }
                                        i = Object(a.a)(window.userRepos);
                                        try {
                                            for (
                                                s = function () {
                                                    var e = c.value,
                                                        r = t.find(function (t) {
                                                            return t.id == e.id;
                                                        });
                                                    if (void 0 == r) {
                                                        var a = window.userRepos.indexOf(e);
                                                        window.userRepos.splice(a, 1);
                                                    }
                                                },
                                                    i.s();
                                                !(c = i.n()).done;

                                            )
                                                s();
                                        } catch (l) {
                                            i.e(l);
                                        } finally {
                                            i.f();
                                        }
                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )),
                (window.getLocalRepoInfo = function (e) {
                    var t = window.userRepos.find(function (t) {
                        return t.id == e;
                    });
                    return t || null;
                }),
                (window.generateTaubyteDomain = function () {
                    for (var e = window.resourceCounts.global.domains.org, t = 0, r = Object.values(window.resourceCounts.local); t < r.length; t++) {
                        var a = r[t];
                        try {
                            var n = a.domains.org;
                            e += n;
                        } catch (s) {}
                    }
                    var o = window.localStorage.getItem("taubyte_network");
                    if ("Custom" == o || o.includes("Taubyte's")) {
                        var i = window.localStorage.getItem("taubyte_generatedPrefix");
                        return "".concat(window.project.id.slice(-8).toLowerCase()).concat(e.toString(), ".").concat(i);
                    }
                    var c = o.split("/")[1];
                    return "".concat(window.project.id.slice(-8).toLowerCase()).concat(e.toString(), ".").concat(c, ".localtau");
                }),
                (window.storeInitialized = false),
                (window.rawUpdateResourceCounts = function (e, t) {
                    var r = 0,
                        a = 0;
                    t > 0 ? r++ : a++;
                    var n = window.resourceCounts.local,
                        o = window.resourceCounts.global,
                        i = window.selectedApp;
                    i
                        ? void 0 != n[i]
                            ? void 0 != n[i][e]
                                ? ((n[i][e].org += t), r > 0 ? n[i][e].add++ : n[i][e].del++)
                                : (n[i][e] = {
                                      org: t,
                                      add: r,
                                      del: a,
                                  })
                            : ((n[i] = {}),
                              (n[i][e] = {
                                  org: t,
                                  add: r,
                                  del: a,
                              }))
                        : ((o[e].org += t), r > 0 ? o[e].add++ : o[e].del++),
                        s.a.$emit("UpdateCounts");
                });
            var P = {
                get: x,
                set: v,
                clear: j,
                preload: S,
                loadProject: R,
                syncGet: k,
            };
            t.a = P;
        },
        2: function (e, t) {},
        2208: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, "state", function () {
                    return a;
                }),
                r.d(t, "mutations", function () {
                    return n;
                }),
                r.d(t, "actions", function () {
                    return o;
                });
            var a = {
                    type: null,
                    message: null,
                },
                n = {
                    success: function (e, t) {
                        (e.type = "success"), (e.message = t);
                    },
                    error: function (e, t) {
                        (e.type = "danger"), (e.message = t);
                    },
                    clear: function (e) {
                        (e.type = null), (e.message = null);
                    },
                },
                o = {
                    success: function (e, t) {
                        var r = e.commit;
                        r("success", t);
                    },
                    error: function (e, t) {
                        var r = e.commit;
                        r("error", t);
                    },
                    clear: function (e) {
                        var t = e.commit;
                        t("clear");
                    },
                };
        },
        3: function (e, t) {},
        3504: function (e) {
            e.exports = JSON.parse(
                '{"navbar":{"search":{"text":"搜索..."},"dropdown":{"megamenu":{"text":"超级菜单","uicontent":{"title":"UI组件","list":{"lightbox":"灯箱","rangeslider":"范围滑块","sweetalert":"甜蜜警报","rating":"评分","forms":"形式","tables":"桌子","charts":"图表"}},"application":{"title":"应用领域","list":{"ecommerce":"电子商务","calendar":"日历","email":"电子邮件","projects":"专案","tasks":"任务","contacts":"联络人"}},"extrapages":{"title":"额外页面","list":{"lightsidebar":"侧边灯","compactsidebar":"紧凑型侧边栏","horizontallayout":"水平布局","maintenance":"保养","comingsoon":"快来了","timeline":"时间线","faqs":"常见问题"}}},"site":{"list":{"github":"的GitHub","bitbucket":"比特桶","dribbble":"运球","dropbox":"投寄箱","mailchimp":"邮件黑猩猩","slack":"松弛"}},"notification":{"text":"通知事项","subtext":"查看全部","order":{"title":"您的订单已下达","text":"如果几种语言合并了语法","time":"3分钟前"},"james":{"title":"詹姆斯·勒米尔","text":"好像是简体英语。","time":"1小时前"},"item":{"title":"您的物品已发货","text":"如果几种语言合并了语法","time":"3分钟前"},"salena":{"title":"萨莱娜·莱菲尔德","text":"作为西方的一个怀疑的剑桥朋友。","time":"1小时前"},"button":"装载更多.."},"kevin":{"text":"凯文","list":{"profile":"轮廓","mywallet":"我的钱包","settings":"设定值","lockscreen":"锁屏","closeproject":"关闭项目","reloadproject":"重新加载项目","logout":"登出"}}}},"menuitems":{"menu":{"text":"菜单"},"dashboard":{"text":"仪表板","badge":"3"},"layouts":{"text":"版面","list":{"horizontal":"卧式","lightsidebar":"侧边灯","compactsidebar":"紧凑型侧边栏","iconsidebar":"图标侧栏","boxed":"盒装版式","vertical":"垂直","lighttopbar":"轻顶杆"}},"apps":{"text":"应用"},"calendar":{"text":"日历"},"chat":{"text":"聊天室","badge":"新"},"ecommerce":{"text":"电子商务","list":{"products":"产品展示","productdetail":"产品明细","orders":"订单","customers":"顾客","cart":"大车","checkout":"查看","shops":"商店","addproduct":"添加产品"}},"email":{"text":"电子邮件","list":{"inbox":"收件箱","reademail":"阅读电子邮件"}},"kanban":{"text":"看板委员会"},"pages":{"text":"页数"},"authentication":{"text":"认证方式","list":{"login":"登录","register":"寄存器","recoverpwd":"恢复密码","lockscreen":"锁屏"}},"utility":{"text":"效用","list":{"starter":"起始页","maintenance":"保养","comingsoon":"快来了","timeline":"时间线","faqs":"常见问题","pricing":"价钱","error404":"错误404","error500":"错误500"}},"components":{"text":"组件"},"uielements":{"text":"UI元素","list":{"alerts":"警报","buttons":"纽扣","cards":"牌","carousel":"轮播","dropdowns":"下拉菜单","grid":"格网","images":"图片","modals":"模态","rangeslider":"范围滑块","progressbar":"进度条","sweetalert":"甜蜜警报","tabs":"标签和手风琴","typography":"版式","video":"视频","general":"一般","lightbox":"灯箱","sessiontimeout":"会话超时","rating":"评分","notifications":"通知事项"}},"forms":{"text":"形式","badge":"8","list":{"elements":"表单元素","validation":"表格验证","advanced":"表格高级","editor":"表格编辑器","fileupload":"表格文件上传","wizard":"表单向导","mask":"表格蒙版"}},"tables":{"text":"桌子","list":{"basic":"基本表","advanced":"高级表"}},"charts":{"text":"图表","list":{"apex":"顶点图","chartjs":"Chartjs图表","chartist":"宪章图","echart":"电子图表"}},"icons":{"text":"图示","list":{"remix":"混音图标","materialdesign":"材料设计","dripicons":"滴灌","fontawesome":"字体很棒"}},"maps":{"text":"地图","list":{"googlemap":"谷歌地图","leaflet":"传单地图"}},"multilevel":{"text":"多层次","list":{"level1":{"1":"1.1级","2":"1.2级","level2":{"1":"2.1级","2":"2.2级"}}}}}}'
            );
        },
        4: function (e, t) {},
        "49f8": function (e, t, r) {
            var a = {
                "./ar.json": "af08",
                "./en.json": "edd4",
                "./es.json": "a306",
                "./fr.json": "f693",
                "./zh.json": "3504",
            };

            function n(e) {
                var t = o(e);
                return r(t);
            }

            function o(e) {
                if (!r.o(a, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                }
                return a[e];
            }
            (n.keys = function () {
                return Object.keys(a);
            }),
                (n.resolve = o),
                (e.exports = n),
                (n.id = "49f8");
        },
        "4ed2": function (e, t, r) {
            "use strict";
            r.d(t, "a", function () {
                return g;
            }),
                r.d(t, "h", function () {
                    return x;
                }),
                r.d(t, "b", function () {
                    return k;
                }),
                r.d(t, "d", function () {
                    return j;
                }),
                r.d(t, "c", function () {
                    return C;
                }),
                r.d(t, "g", function () {
                    return S;
                }),
                r.d(t, "f", function () {
                    return O;
                }),
                r.d(t, "e", function () {
                    return P;
                });
            var a = r("b85c"),
                n = r("1da1"),
                o = (r("96cf"), r("caad"), r("2532"), r("ac1f"), r("1276"), r("b0c0"), r("15a0")),
                i = r("bc3a"),
                c = r.n(i),
                s = "https://auth.tau.sandbox.taubyte.com",
                l = "https://billing.tau.sandbox.taubyte.com",
                u = "https://console.taubyte.com/cors?u=",
                d = "https://console.taubyte.com",
                p = "https://patrick.tau.sandbox.taubyte.com",
                m = "https://seer.tau.sandbox.taubyte.com";

            function h(e) {
                return e.secure ? "https://localhost:" + e.http : "http://localhost:" + e.http;
            }

            function b() {
                return (
                    (b = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            var t, r, n, i, f, b, g, w;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (((t = o.a.get("network")), !t.includes("Dreamland"))) {
                                                e.next = 11;
                                                break;
                                            }
                                            return (r = t.split("/")[1]), (e.next = 5), c.a.get("http://127.0.0.1:1421/les/miserables/".concat(r));
                                        case 5:
                                            (n = e.sent), (i = Object(a.a)(n.data.nodes));
                                            try {
                                                for (i.s(); !(f = i.n()).done; )
                                                    (b = f.value),
                                                        b.name.includes("console")
                                                            ? (d = h(b.value))
                                                            : b.name.includes("auth")
                                                            ? (s = h(b.value))
                                                            : b.name.includes("patrick")
                                                            ? (p = h(b.value))
                                                            : b.name.includes("billing") && (l = h(b.value));
                                            } catch (x) {
                                                i.e(x);
                                            } finally {
                                                i.f();
                                            }
                                            (u = "http://localhost:1421/cors?u="), (e.next = 27);
                                            break;
                                        case 11:
                                            if (!t.includes("Taubyte's")) {
                                                e.next = 20;
                                                break;
                                            }
                                            (s = "https://auth.tau.sandbox.taubyte.com"),
                                                (l = "https://billing.tau.sandbox.taubyte.com"),
                                                (u = "https://console.taubyte.com/cors?u="),
                                                (d = "https://console.taubyte.com"),
                                                (p = "https://patrick.tau.sandbox.taubyte.com"),
                                                (m = "https://seer.tau.sandbox.taubyte.com"),
                                                (e.next = 27);
                                            break;
                                        case 20:
                                            if ("Custom" != t) {
                                                e.next = 27;
                                                break;
                                            }
                                            return (
                                                (g = JSON.parse(o.a.get("network-object"))),
                                                (w = g.url),
                                                (s = "https://auth.tau.".concat(w)),
                                                (p = "https://patrick.tau.".concat(w)),
                                                (m = "https://seer.tau.".concat(w)),
                                                e.abrupt("return", true)
                                            );
                                        case 27:
                                            return e.abrupt("return", true);
                                        case 28:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    b.apply(this, arguments)
                );
            }

            function w() {
                return (
                    (w = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), b.apply(this, arguments);
                                        case 2:
                                            return e.abrupt("return", s);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    w.apply(this, arguments)
                );
            }

            function v() {
                return (
                    (v = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), b.apply(this, arguments);
                                        case 2:
                                            return e.abrupt("return", m);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    v.apply(this, arguments)
                );
            }

            function y() {
                return (
                    (y = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), b.apply(this, arguments);
                                        case 2:
                                            return e.abrupt("return", l);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    y.apply(this, arguments)
                );
            }

            function R() {
                return (
                    (R = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), b.apply(this, arguments);
                                        case 2:
                                            return e.abrupt("return", u);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    R.apply(this, arguments)
                );
            }

            function A() {
                return (
                    (A = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), b.apply(this, arguments);
                                        case 2:
                                            return e.abrupt("return", d);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    A.apply(this, arguments)
                );
            }

            function _() {
                return (
                    (_ = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), b.apply(this, arguments);
                                        case 2:
                                            return e.abrupt("return", p);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    _.apply(this, arguments)
                );
            }

            function E() {
                return (
                    (E = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), b.apply(this, arguments);
                                        case 2:
                                            return e.abrupt("return", d + "/api/globals/");
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    E.apply(this, arguments)
                );
            }

            function T() {
                return (
                    (T = Object(n.a)(
                        regeneratorRuntime.mark(function e() {
                            var t, r, n, i, s, l;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (r = o.a.get("network").split("/")[1]), (e.next = 3), c.a.get("http://127.0.0.1:1421/les/miserables/".concat(r));
                                        case 3:
                                            (n = e.sent), (i = Object(a.a)(n.data.nodes));
                                            try {
                                                for (i.s(); !(s = i.n()).done; ) (l = s.value), l.name.includes("substrate") && (t = l.value.http);
                                            } catch (u) {
                                                i.e(u);
                                            } finally {
                                                i.f();
                                            }
                                            return e.abrupt("return", t);
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    T.apply(this, arguments)
                );
            }
        },
        5: function (e, t) {},
        "5a56": function (e, t, r) {},
        "7e7d": function (e, t, r) {},
        "90e8": function (e, t, r) {
            "use strict";
            r.d(t, "a", function () {
                return n;
            });
            var a = r("2b0e"),
                n = new a.default();
        },
        9225: function (e, t, r) {
            "use strict";
            r("d3b7"), r("159b"), r("ddb0"), r("ac1f"), r("466d");
            var a = r("2b0e"),
                n = r("a925");

            function o() {
                var e = r("49f8"),
                    t = {};
                return (
                    e.keys().forEach(function (r) {
                        var a = r.match(/([A-Za-z0-9-_]+)\./i);
                        if (a && a.length > 1) {
                            var n = a[1];
                            t[n] = e(r);
                        }
                    }),
                    t
                );
            }
            a.default.use(n.a),
                (t.a = new n.a({
                    silentTranslationWarn: true,
                    locale:
                        Object({
                            NODE_ENV: "production",
                            BASE_URL: "/",
                        }).VUE_APP_I18N_LOCALE || "en",
                    fallbackLocale:
                        Object({
                            NODE_ENV: "production",
                            BASE_URL: "/",
                        }).VUE_APP_I18N_FALLBACK_LOCALE || "en",
                    messages: o(),
                }));
        },
        a18c: function (e, t, r) {
            "use strict";
            var a = r("b85c"),
                n = r("1da1"),
                o = (r("d3b7"), r("3ca3"), r("ddb0"), r("b0c0"), r("96cf"), r("2b0e")),
                i = r("8c4f"),
                c = r("58ca"),
                s = r("15a0"),
                l = [
                    {
                        path: "/login",
                        name: "login",
                        component: function () {
                            return Promise.all([r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-2d228e27"), r.e("chunk-278acbd9"), r.e("chunk-63b33af0")]).then(r.bind(null, "b854"));
                        },
                    },
                    {
                        path: "/",
                        name: "home",
                        meta: {
                            authRequired: true,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-18b919c0")]).then(r.bind(null, "aa92"));
                        },
                    },
                    {
                        path: "/view",
                        name: "view",
                        meta: {
                            authRequired: true,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-18b919c0")]).then(r.bind(null, "aa92"));
                        },
                    },
                    {
                        path: "/open-project",
                        name: "open-project",
                        meta: {
                            authRequired: true,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-2ee3b692")]).then(r.bind(null, "7ff8"));
                        },
                    },
                    {
                        path: "/loading",
                        name: "loading",
                        meta: {
                            authRequired: true,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d216b2d"), r.e("chunk-2d0bd5cb")]).then(r.bind(null, "2c59"));
                        },
                    },
                    {
                        path: "/billing",
                        name: "billing",
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-278acbd9"), r.e("chunk-db3d23f2")]).then(r.bind(null, "6316"));
                        },
                    },
                    {
                        path: "/devices",
                        name: "devices",
                        meta: {
                            authRequired: true,
                        },
                        props: true,
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-04e1fd6e")]).then(r.bind(null, "adbb"));
                        },
                    },
                    {
                        path: "/applications",
                        name: "applications",
                        meta: {
                            authRequired: true,
                        },
                        props: true,
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-4101dab2")]).then(r.bind(null, "e92f"));
                        },
                    },
                    {
                        path: "/applications/:name",
                        name: "application",
                        meta: {
                            authRequired: true,
                        },
                        props: true,
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-1c2a58e7")]).then(r.bind(null, "1ea2"));
                        },
                    },
                    {
                        path: "/globals/:name",
                        name: "globals",
                        meta: {
                            authRequired: true,
                        },
                        props: true,
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-3b716ec8")]).then(r.bind(null, "d258"));
                        },
                    },
                    {
                        path: "/error/:type",
                        name: "error",
                        props: true,
                        meta: {
                            authRequired: false,
                        },
                        component: function () {
                            return r.e("chunk-8997e16a").then(r.bind(null, "b254"));
                        },
                    },
                    {
                        path: "/billing/info",
                        name: "billingInfo",
                        meta: {
                            authRequired: true,
                            billingRequired: true,
                        },
                        props: true,
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-be2fd9c8")]).then(r.bind(null, "3f74"));
                        },
                    },
                    {
                        path: "/billing/add",
                        name: "addBilling",
                        meta: {
                            authRequired: true,
                        },
                        props: {
                            newProject: false,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-278acbd9"), r.e("chunk-db3d23f2")]).then(r.bind(null, "6316"));
                        },
                    },
                    {
                        path: "/jobs",
                        name: "jobs",
                        meta: {
                            authRequired: true,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-7a04c5b9")]).then(r.bind(null, "f768"));
                        },
                    },
                    {
                        path: "/config",
                        name: "config",
                        meta: {
                            authRequired: true,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-3c06c4ad")]).then(r.bind(null, "1ca32"));
                        },
                    },
                    {
                        path: "/buckets/global",
                        name: "global",
                        meta: {
                            authRequired: true,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-2d216b2d"), r.e("chunk-6ac0d506"), r.e("chunk-e7918302")]).then(r.bind(null, "50f2"));
                        },
                    },
                    {
                        path: "/network/:universe",
                        name: "network",
                        props: true,
                        meta: {
                            authRequired: false,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-6ac0d506"), r.e("chunk-2d228e27"), r.e("chunk-d4d2b92a")]).then(r.bind(null, "373f"));
                        },
                    },
                    {
                        path: "/network",
                        name: "network",
                        props: true,
                        meta: {
                            authRequired: false,
                        },
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-6ac0d506"), r.e("chunk-2d228e27"), r.e("chunk-d4d2b92a")]).then(r.bind(null, "373f"));
                        },
                    },
                    {
                        path: "/dreamland",
                        name: "dreamland",
                        component: function () {
                            return Promise.all([r.e("chunk-2d0cc286"), r.e("chunk-2d237914"), r.e("chunk-6ac0d506"), r.e("chunk-2d228e27"), r.e("chunk-3997116e")]).then(r.bind(null, "9fa9"));
                        },
                    },
                ],
                u = r("bc3a"),
                d = r.n(u),
                p = r("4ed2"),
                m = r("05c4"),
                h = r("d38f");
            o.default.use(i.a),
                o.default.use(c.a, {
                    keyName: "page",
                });
            var f = new i.a({
                    routes: l,
                    mode: "history",
                    scrollBehavior: function (e, t, r) {
                        return (
                            r || {
                                x: 0,
                                y: 0,
                            }
                        );
                    },
                }),
                b = (function () {
                    var e = Object(n.a)(
                        regeneratorRuntime.mark(function e(t) {
                            var r;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), window.tpm.projects();
                                        case 2:
                                            (r = e.sent),
                                                r.projects ||
                                                    t({
                                                        name: "error",
                                                    });
                                        case 4:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })();

            function w() {
                return (
                    (w = Object(n.a)(
                        regeneratorRuntime.mark(function e(t, r, a, n) {
                            var o, i;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (window.tpm) {
                                                e.next = 8;
                                                break;
                                            }
                                            return (e.t0 = m.a), (e.next = 4), Object(p.a)();
                                        case 4:
                                            (e.t1 = e.sent), (e.t2 = n), (window.tpm = new e.t0(e.t1, "github", e.t2)), b(a);
                                        case 8:
                                            if (
                                                (s.a.get("avatar_url") ||
                                                    window.tpm
                                                        .me()
                                                        .then(function (e) {
                                                            d.a.get("https://api.github.com/users/" + e.user.login).then(function (e) {
                                                                var t = e.data.avatar_url;
                                                                s.a.set("avatar_url", t);
                                                            });
                                                        })
                                                        .catch(function (e) {
                                                            console.log("broken", e);
                                                        }),
                                                (o = s.a.get("project_id")),
                                                o)
                                            ) {
                                                e.next = 16;
                                                break;
                                            }
                                            if ("open-project" != t.name) {
                                                e.next = 13;
                                                break;
                                            }
                                            return e.abrupt("return", a());
                                        case 13:
                                            f.push({
                                                name: "open-project",
                                            }),
                                                (e.next = 25);
                                            break;
                                        case 16:
                                            if (0 != window.storeInitialized) {
                                                e.next = 22;
                                                break;
                                            }
                                            if ("loading" != t.name) {
                                                e.next = 19;
                                                break;
                                            }
                                            return e.abrupt("return", a());
                                        case 19:
                                            a({
                                                name: "loading",
                                                query: {
                                                    redirectFrom: t.fullPath,
                                                },
                                            }),
                                                (e.next = 25);
                                            break;
                                        case 22:
                                            (i = window.project.config_seer.get("config").value()), i || Object(h.a)(), a();
                                        case 25:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    w.apply(this, arguments)
                );
            }
            f.beforeEach(function (e, t, r) {
                window.selectedApp = void 0;
                var a = e.matched.some(function (e) {
                    return e.meta.authRequired;
                });
                if (!a) return r();
                var n = e.matched.some(function (e) {
                    return e.meta.billingRequired;
                });
                if (n && "false" == s.a.get("billingEnabled")) return t;
                var o = s.a.get("token");
                o
                    ? w.apply(this, arguments)
                    : r({
                          name: "login",
                      });
            }),
                f.beforeResolve(
                    (function () {
                        var e = Object(n.a)(
                            regeneratorRuntime.mark(function e(t, r, n) {
                                var o, i, c;
                                return regeneratorRuntime.wrap(
                                    function (e) {
                                        while (1)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    (e.prev = 0),
                                                        (o = Object(a.a)(t.matched)),
                                                        (e.prev = 2),
                                                        (c = regeneratorRuntime.mark(function e() {
                                                            var a;
                                                            return regeneratorRuntime.wrap(function (e) {
                                                                while (1)
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return (
                                                                                (a = i.value),
                                                                                (e.next = 3),
                                                                                new Promise(function (e, o) {
                                                                                    a.meta && a.meta.beforeResolve
                                                                                        ? a.meta.beforeResolve(t, r, function () {
                                                                                              arguments.length ? (n.apply(void 0, arguments), o(new Error("Redirected"))) : e();
                                                                                          })
                                                                                        : e();
                                                                                })
                                                                            );
                                                                        case 3:
                                                                        case "end":
                                                                            return e.stop();
                                                                    }
                                                            }, e);
                                                        })),
                                                        o.s();
                                                case 5:
                                                    if ((i = o.n()).done) {
                                                        e.next = 9;
                                                        break;
                                                    }
                                                    return e.delegateYield(c(), "t0", 7);
                                                case 7:
                                                    e.next = 5;
                                                    break;
                                                case 9:
                                                    e.next = 14;
                                                    break;
                                                case 11:
                                                    (e.prev = 11), (e.t1 = e.catch(2)), o.e(e.t1);
                                                case 14:
                                                    return (e.prev = 14), o.f(), e.finish(14);
                                                case 17:
                                                    e.next = 22;
                                                    break;
                                                case 19:
                                                    return (e.prev = 19), (e.t2 = e.catch(0)), e.abrupt("return");
                                                case 22:
                                                    n();
                                                case 23:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [
                                        [0, 19],
                                        [2, 11, 14, 17],
                                    ]
                                );
                            })
                        );
                        return function (t, r, a) {
                            return e.apply(this, arguments);
                        };
                    })()
                );
            t.a = f;
        },
        a306: function (e) {
            e.exports = JSON.parse(
                '{"navbar":{"search":{"text":"Buscar..."},"dropdown":{"megamenu":{"text":"Mega menú","uicontent":{"title":"Componentes de la IU","list":{"lightbox":"Caja ligera","rangeslider":"Control deslizante de rango","sweetalert":"Alerta dulce","rating":"Clasificación","forms":"Formas","tables":"Mesas","charts":"Gráficos"}},"application":{"title":"Aplicaciones","list":{"ecommerce":"Comercio electrónico","calendar":"Calendario","email":"Correo electrónico","projects":"Proyectos","tasks":"Tareas","contacts":"Contactos"}},"extrapages":{"title":"Páginas extra","list":{"lightsidebar":"Barra lateral ligera","compactsidebar":"Barra lateral compacta","horizontallayout":"Diseño horizontal","maintenance":"Mantenimiento","comingsoon":"Próximamente","timeline":"Cronograma","faqs":"Preguntas frecuentes"}}},"site":{"list":{"github":"GitHub","bitbucket":"Bitbucket","dribbble":"Regatear","dropbox":"Dropbox","mailchimp":"Chimpancé de correo","slack":"Floja"}},"notification":{"text":"Notificaciones","subtext":"Ver todo","order":{"title":"Su pedido es realizado","text":"Si varios idiomas fusionan la gramática","time":"Hace 3 minutos"},"james":{"title":"James Lemire","text":"Parecerá un inglés simplificado.","time":"Hace 1 hora"},"item":{"title":"Your item is shipped","text":"Si varios idiomas fusionan la gramática","time":"Hace 3 minutos"},"salena":{"title":"Salena Layfield","text":"As a skeptical Cambridge friend of mine occidental.","time":"Hace 1 hora"},"button":"Carga más.."},"kevin":{"text":"Kevin","list":{"profile":"Perfil","mywallet":"Mi billetera","settings":"Configuraciones","lockscreen":"Bloquear pantalla","closeproject":"Cerrar proyecto","reloadproject":"Recargar proyecto","logout":"cerrar sesión"}}}},"menuitems":{"menu":{"text":"Menú"},"dashboard":{"text":"Tableros","badge":"3"},"layouts":{"text":"Diseños","list":{"horizontal":"Horizontal","lightsidebar":"Barra lateral ligera","compactsidebar":"Barra lateral compacta","iconsidebar":"Barra lateral de iconos","boxed":"Diseño en caja","vertical":"Vertical","lighttopbar":"Barra superior ligera"}},"apps":{"text":"Aplicaciones"},"calendar":{"text":"Calendario"},"chat":{"text":"Charla","badge":"Nueva"},"ecommerce":{"text":"Comercio electrónico","list":{"products":"Productos","productdetail":"Detalle del producto","orders":"Pedidos","customers":"Clientes","cart":"Carro","checkout":"Revisa","shops":"Tiendas","addproduct":"Agregar producto"}},"email":{"text":"Correo electrónico","list":{"inbox":"Bandeja de entrada","reademail":"Leer el correo electrónico"}},"kanban":{"text":"Kanban Board"},"pages":{"text":"Páginas"},"authentication":{"text":"Autenticación","list":{"login":"Iniciar sesión","register":"Registrarse","recoverpwd":"Recuperar contraseña","lockscreen":"Bloquear pantalla"}},"utility":{"text":"Utilidad","list":{"starter":"Página de inicio","comingsoon":"Próximamente","maintenance":"Mantenimiento","timeline":"Cronograma","faqs":"Preguntas frecuentes","pricing":"Precios","error404":"error 404","error500":"error 500"}},"components":{"text":"Componentes"},"uielements":{"text":"Elementos de la IU","list":{"alerts":"Alertas","buttons":"Botones","cards":"Tarjetas","carousel":"Carrusel","dropdowns":"Listas deplegables","grid":"Cuadrícula","images":"Imágenes","modals":"Modalidades","rangeslider":"Control deslizante de rango","progressbar":"Barras de progreso","sweetalert":"Alerta dulce","tabs":"Pestañas y acordeones","typography":"Tipografía","video":"Vídeo","general":"General","lightbox":"Caja ligera","sessiontimeout":"Hora de término de la sesión","rating":"Clasificación","notifications":"Notificaciones"}},"forms":{"text":"Formas","badge":"8","list":{"elements":"Elementos de formulario","validation":"Validación de formulario","advanced":"Formulario avanzado","editor":"Editora de formularios","fileupload":"Subir archivo de formulario","wizard":"Asistente de formulario","mask":"Máscara de forma"}},"tables":{"text":"Mesas","list":{"basic":"Tablas Básicas","advanced":"Mesa avanzada"}},"charts":{"text":"Gráficos","list":{"apex":"Gráfico de Apex","chartjs":"Chartjs Chart","chartist":"Chartist Chart","echart":"Gráfico E"}},"icons":{"text":"Íconos","list":{"remix":"Remix iconos","materialdesign":"Diseño de materiales","dripicons":"Dripicons","fontawesome":"Font awesome"}},"maps":{"text":"Mapas","list":{"googlemap":"mapas de Google","leaflet":"Mapas de folleto"}},"multilevel":{"text":"Multi nivel","list":{"level1":{"1":"Nivel 1.1","2":"Nivel 1.2","level2":{"1":"Nivel 2.1","2":"Level 2.2"}}}}}}'
            );
        },
        af08: function (e) {
            e.exports = JSON.parse(
                '{"navbar":{"search":{"text":"بحث..."},"dropdown":{"megamenu":{"text":"القائمة الضخمة","uicontent":{"title":"مكونات واجهة المستخدم","list":{"lightbox":"صندوق مضئ","rangeslider":"شريط التمرير","sweetalert":"تنبيه لطيف","rating":"تقييم","forms":"نماذج","tables":"الجداول","charts":"الرسوم البيانية"}},"application":{"title":"التطبيقات","list":{"ecommerce":"التجارة الإلكترونية","calendar":"التقويم","email":"البريد الإلكتروني","projects":"المشاريع","tasks":"مهام","contacts":"جهات الاتصال"}},"extrapages":{"title":"صفحات اضافية","list":{"lightsidebar":"شريط جانبي خفيف","compactsidebar":"شريط جانبي مضغوط","horizontallayout":"التخطيط الأفقي","maintenance":"اعمال صيانة","comingsoon":"قريبا","timeline":"الجدول الزمني","faqs":"الأسئلة الشائعة"}}},"site":{"list":{"github":"جيثب","bitbucket":"Bitbucket","dribbble":"المراوغة","dropbox":"بصندوق الإسقاط","mailchimp":"بريد الشمبانزي","slack":"تثاقل"}},"notification":{"text":"إشعارات","subtext":"عرض الكل","order":{"title":"تم تقديم طلبك","text":"إذا دمجت عدة لغات القواعد","time":"قبل 3 دقائق"},"james":{"title":"جيمس لومير","text":"سيبدو الأمر مثل اللغة الإنجليزية المبسطة.","time":"منذ 1 ساعة"},"item":{"title":"يتم شحن البند الخاص بك","text":"إذا دمجت عدة لغات القواعد","time":"قبل 3 دقائق"},"salena":{"title":"سالينا لايفيلد","text":"بصفتي صديقًا متشككًا في كامبريدج لأعمال الغرب.","time":"منذ 1 ساعة"},"button":"تحميل المزيد.."},"kevin":{"text":"كيفن","list":{"profile":"الملف الشخصي","mywallet":"محفظتي","settings":"إعدادات","lockscreen":"اقفل الشاشة","logout":"تسجيل خروج"}}}},"menuitems":{"menu":{"text":"قائمة طعام"},"dashboard":{"text":"لوحات المعلومات","badge":"3"},"layouts":{"text":"التخطيطات","list":{"horizontal":"عرضي","lightsidebar":"شريط جانبي خفيف","compactsidebar":"شريط جانبي مضغوط","iconsidebar":"الشريط الجانبي للرموز","boxed":"تخطيط محاصر","vertical":"عمودي","lighttopbar":"شريط علوي خفيف"}},"apps":{"text":"تطبيقات"},"calendar":{"text":"التقويم"},"chat":{"text":"دردشة","badge":"جديد"},"ecommerce":{"text":"التجارة الإلكترونية","list":{"products":"منتجات","productdetail":"تفاصيل المنتج","orders":"الطلب #٪ s","customers":"الزبائن","cart":"عربة التسوق","checkout":"الدفع","shops":"محلات","addproduct":"أضف منتج"}},"email":{"text":"البريد الإلكتروني","list":{"inbox":"صندوق الوارد","reademail":"قراءة البريد الإلكتروني"}},"kanban":{"text":"مجلس كانبان"},"pages":{"text":"الصفحات"},"authentication":{"text":"المصادقة","list":{"login":"تسجيل الدخول","register":"تسجيل","recoverpwd":"إستعادة كلمة المرور","lockscreen":"اقفل الشاشة","closeproject":"إغلاق المشروع","reloadproject":"إعادة تحميل المشروع","logout":"تسجيل خروج"}},"utility":{"text":"خدمة","list":{"starter":"صفحة المبتدئين","maintenance":"اعمال صيانة","comingsoon":"قريبا","timeline":"الجدول الزمني","faqs":"الأسئلة الشائعة","pricing":"التسعير","error404":"خطأ 404","error500":"خطأ 500"}},"components":{"text":"مكونات"},"uielements":{"text":"عناصر واجهة المستخدم","list":{"alerts":"التنبيهات","buttons":"أزرار","cards":"البطاقات","carousel":"دائري","dropdowns":"هبوط قطرة","grid":"جريد","images":"صور","modals":"مشروط","rangeslider":"شريط التمرير","progressbar":"أشرطة التقدم","sweetalert":"تنبيه لطيف","tabs":"علامات التبويب والأكورديون","typography":"الطباعة","video":"فيديو","general":"جنرال لواء","lightbox":"صندوق مضئ","sessiontimeout":"مهلة جلسة","rating":"تقييم","notifications":"إشعارات"}},"forms":{"text":"نماذج","badge":"8","list":{"elements":"عناصر النموذج","validation":"التحقق من صحة النموذج","advanced":"نموذج متقدم","editor":"محرر النماذج","fileupload":"تحميل ملف النموذج","wizard":"معالج النماذج","mask":"قناع النموذج"}},"tables":{"text":"الجداول","list":{"basic":"الجداول الأساسية","advanced":"جدول متقدم"}},"charts":{"text":"الرسوم البيانية","list":{"apex":"مخطط أبيكس","chartjs":"مخطط Chartjs","chartist":"مخطط رسومي","echart":"مخطط E"}},"icons":{"text":"أيقونات","list":{"remix":"أيقونات ريمكس","materialdesign":"التصميم المادي","dripicons":"Dripicons","fontawesome":"الخط رائع"}},"maps":{"text":"خرائط","list":{"googlemap":"خرائط جوجل","leaflet":"خرائط النشرة"}},"multilevel":{"text":"متعدد المستويات","list":{"level1":{"1":"المستوى 1.1","2":"المستوى 1.2","level2":{"1":"المستوى 2.1","2":"المستوى 2.2"}}}}}}'
            );
        },
        c21a: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, "state", function () {
                    return a;
                }),
                r.d(t, "getters", function () {
                    return n;
                }),
                r.d(t, "mutations", function () {
                    return o;
                }),
                r.d(t, "actions", function () {
                    return i;
                });
            var a = {
                    layoutType: "vertical",
                    layoutWidth: "fluid",
                    leftSidebarType: localStorage.leftSideTheme,
                    topbar: "dark",
                    loader: false,
                    darkMode: localStorage.variant,
                    mapUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                    isActive: true,
                },
                n = {},
                o = {
                    CHANGE_LAYOUT: function (e, t) {
                        e.layoutType = t;
                    },
                    CHANGE_LAYOUT_WIDTH: function (e, t) {
                        e.layoutWidth = t;
                    },
                    CHANGE_LEFT_SIDEBAR_TYPE: function (e, t) {
                        e.leftSidebarType = t;
                    },
                    CHANGE_TOPBAR: function (e, t) {
                        e.topbar = t;
                    },
                    LOADER: function (e, t) {
                        e.loader = t;
                    },
                    DARKMODE: function (e, t) {
                        e.darkMode = t;
                    },
                },
                i = {
                    changeLayoutType: function (e, t) {
                        var r = e.commit,
                            a = t.layoutType;
                        r("CHANGE_LAYOUT", a);
                    },
                    changeLayoutWidth: function (e, t) {
                        var r = e.commit,
                            a = t.layoutWidth;
                        r("CHANGE_LAYOUT_WIDTH", a);
                    },
                    changeLeftSidebarType: function (e, t) {
                        var r = e.commit,
                            a = t.leftSidebarType;
                        r("CHANGE_LEFT_SIDEBAR_TYPE", a);
                    },
                    changeTopbar: function (e, t) {
                        var r = e.commit,
                            a = t.topbar;
                        r("CHANGE_TOPBAR", a);
                    },
                    changeLoaderValue: function (e, t) {
                        var r = e.commit,
                            a = t.loader;
                        r("LOADER", a);
                    },
                    changeDarkTheme: function (e, t) {
                        var r = e.commit,
                            a = t.darkMode;
                        r("DARKMODE", a);
                    },
                };
        },
        c2a4: function (e) {
            e.exports = JSON.parse('{"title":"Taubyte Dashboard","description":"Taubyte admin dashboard"}');
        },
        cd49: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, "bus", function () {
                    return M.a;
                });
            r("e260"), r("e6cf"), r("cca6"), r("a79d");
            var a = r("2b0e"),
                n = function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r(
                        "div",
                        {
                            attrs: {
                                id: "app",
                                "data-app": "",
                            },
                        },
                        [
                            r("router-view"),
                            1 == JSON.parse(e.objStore.get("dreamland-enabled"))
                                ? r(
                                      "b-button",
                                      {
                                          staticClass: "odval-open btn-success",
                                          on: {
                                              click: e.openOdval,
                                          },
                                      },
                                      [e._v(" Dreamland")]
                                  )
                                : e._e(),
                        ],
                        1
                    );
                },
                o = [],
                i = (r("99af"), r("c2a4")),
                c = r("15a0"),
                s = r("1a81");
            window.bean = new s.a("http://localhost:1421");
            var l = {
                    name: "app",
                    page: {
                        titleTemplate: function (e) {
                            return (e = "function" === typeof e ? e(this.$store) : e), e ? "".concat(e, " | ").concat(i.title) : i.title;
                        },
                    },
                    data: function () {
                        return {
                            objStore: c.a,
                        };
                    },
                    created: function () {
                        switch (localStorage.getItem("variant")) {
                            case "dark":
                                document.body.setAttribute("theme-topbar", "dark"),
                                    document.body.setAttribute("data-topbar", "dark"),
                                    document.body.removeAttribute("data-sidebar"),
                                    document.body.removeAttribute("theme-sidebar"),
                                    document.body.removeAttribute("data-sidebar-size"),
                                    document.body.classList.remove("vertical-collpsed"),
                                    localStorage.setItem("leftSideTheme", "dark");
                                break;
                            default:
                                document.body.setAttribute("theme-sidebar", "dark"),
                                    document.body.setAttribute("data-sidebar", "dark"),
                                    document.body.removeAttribute("data-topbar"),
                                    document.body.removeAttribute("theme-topbar"),
                                    document.body.removeAttribute("data-sidebar-size"),
                                    localStorage.setItem("leftSideTheme", "light");
                                break;
                        }
                        M.a.$emit("update-variant", this.leftSideTheme);
                    },
                    methods: {
                        openOdval: function () {
                            window.open("http://localhost:1421");
                        },
                    },
                },
                u = l,
                d = (r("034f"), r("0c7c")),
                p = Object(d.a)(u, n, o, false, null, null, null),
                m = p.exports,
                h = r("5f5b"),
                f = r("1321"),
                b = r.n(f),
                g = r("1dce"),
                w = r.n(g),
                x = r("5886"),
                v = r("b6d0"),
                k = r("e0ec"),
                y = r.n(k),
                j = r("c28b"),
                R = r.n(j),
                C = r("a18c"),
                A = r("2f62"),
                S = r("5530"),
                _ = (r("d3b7"), r("159b"), r("ddb0"), r("d81d"), r("ac1f"), r("1276"), r("5319"), r("bba4")),
                O = r.n(_),
                E = {},
                P = {
                    modules: {},
                };

            function T(e, t) {
                if (1 === t.length) return e;
                var r = t.shift();
                return (
                    (e.modules[r] = Object(S.a)(
                        {
                            namespaced: true,
                        },
                        e.modules[r]
                    )),
                    T(e.modules[r], t)
                );
            }
            (function () {
                var e = r("cfa9");
                e.keys().forEach(function (t) {
                    var r = e(t);
                    if (E[t] !== r) {
                        E[t] = r;
                        var a = t
                                .replace(/^\.\//, "")
                                .replace(/\.\w+$/, "")
                                .split(/\//)
                                .map(O.a),
                            n = T(P, a),
                            o = n.modules;
                        o[a.pop()] = Object(S.a)(
                            {
                                namespaced: true,
                            },
                            r
                        );
                    }
                });
            })();
            var L = P.modules;
            a.default.use(A.a);
            var D = new A.a.Store({
                    modules: L,
                    strict: false,
                }),
                I = D,
                B = r("9225"),
                M = (r("7e7d"), r("90e8")),
                N = r("ce5b"),
                z = r.n(N);
            r("bf40");
            a.default.use(z.a);
            var q = {},
                U = new z.a(q),
                F = r("06aa"),
                H = r.n(F),
                G = r("d7da"),
                V = r("349e"),
                J = r.n(V);
            (a.default.config.productionTip = false),
                a.default.use(y.a),
                a.default.use(h.a),
                a.default.use(R.a),
                a.default.use(w.a),
                a.default.use(x.a),
                a.default.use(v.a),
                a.default.use(r("84b5")),
                a.default.use(H.a),
                a.default.use(G.a),
                a.default.use(J.a),
                a.default.component("apexchart", b.a),
                new a.default({
                    vuetify: U,
                    router: C.a,
                    store: I,
                    i18n: B.a,
                    render: function (e) {
                        return e(m);
                    },
                }).$mount("#app");
        },
        cfa9: function (e, t, r) {
            var a = {
                "./layout.js": "c21a",
                "./notification.js": "2208",
            };

            function n(e) {
                var t = o(e);
                return r(t);
            }

            function o(e) {
                if (!r.o(a, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                }
                return a[e];
            }
            (n.keys = function () {
                return Object.keys(a);
            }),
                (n.resolve = o),
                (e.exports = n),
                (n.id = "cfa9");
        },
        d38f: function (e, t, r) {
            "use strict";
            r.d(t, "a", function () {
                return o;
            });
            var a = r("1da1"),
                n = (r("96cf"), r("15a0"));

            function i() {
                return (
                    (i = Object(a.a)(
                        regeneratorRuntime.mark(function e() {
                            var t;
                            return regeneratorRuntime.wrap(function (e) {
                                while (1)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (t = {
                                                    id: n.a.get("project_id"),
                                                    name: n.a.get("project_name"),
                                                    description: n.a.get("project_description"),
                                                    notification: {
                                                        email: n.a.get("project_email"),
                                                    },
                                                }),
                                                (e.next = 3),
                                                window.project.config_seer.get("config").document().set(t).commit()
                                            );
                                        case 3:
                                            return (e.next = 5), window.project.config_seer.sync();
                                        case 5:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )),
                    i.apply(this, arguments)
                );
            }
        },
        edd4: function (e) {
            e.exports = JSON.parse(
                '{"navbar":{"search":{"text":"Search..."},"dropdown":{"megamenu":{"text":"Mega Menu","uicontent":{"title":"UI Components","list":{"lightbox":"Lightbox","rangeslider":"Range Slider","sweetalert":"Sweet Alert","rating":"Rating","forms":"Forms","tables":"Tables","charts":"Charts"}},"application":{"title":"Applications","list":{"ecommerce":"Ecommece","calendar":"Calendar","email":"Email","projects":"Projects","tasks":"Tasks","contacts":"Contacts"}},"extrapages":{"title":"Extra Pages","list":{"lightsidebar":"Light Sidebar","compactsidebar":"Compact Sidebar","horizontallayout":"Horizontal Layout","maintenance":"Maintenance","comingsoon":"Coming Soon","timeline":"Timeline","faqs":"FAQs"}}},"site":{"list":{"github":"GitHub","bitbucket":"Bitbucket","dribbble":"Dribbble","dropbox":"Dropbox","mailchimp":"Mail Chimp","slack":"Slack"}},"notification":{"text":"Notifications","subtext":"View All","order":{"title":"Your order is placed","text":"If several languages coalesce the grammar","time":"3 min ago"},"james":{"title":"James Lemire","text":"It will seem like simplified English.","time":"1 hours ago"},"item":{"title":"Your item is shipped","text":"If several languages coalesce the grammar","time":"3 min ago"},"salena":{"title":"Salena Layfield","text":"As a skeptical Cambridge friend of mine occidental.","time":"1 hours ago"},"button":"Load More.."},"kevin":{"text":"Admin","list":{"profile":"Profile","mywallet":"My Wallet","settings":"Settings","lockscreen":"Lock screen","closeproject":"Close Project","projectdetails":"Project Details","reloadproject":"Reload Project","jobstatus":"Builds","logout":"Logout"}}}},"menuitems":{"menu":{"text":"Dashboards"},"system":{"text":"System","list":{"status":"Status","controls":"Controls","utilities":"Utilities"}},"utilities":{"text":"Utilities","list":{"svg_converter":"Base Encoder"}},"dashboard":{"text":"Main","badge":"3"},"dashboard_prognosis":{"text":"Prognosis","badge":"3"},"layouts":{"text":"Layouts","list":{"horizontal":"Horizontal","lightsidebar":"Light Sidebar","compactsidebar":"Compact Sidebar","iconsidebar":"Icons Sidebar","boxed":"Boxed Layout","vertical":"Vertical","lighttopbar":"Light Topbar"}},"apps":{"text":"Apps"},"calendar":{"text":"Calendar"},"chat":{"text":"Chat","badge":"New"},"ecommerce":{"text":"Ecommerce","list":{"products":"Products","productdetail":"Product Detail","orders":"Orders","customers":"Customers","cart":"Cart","checkout":"Checkout","shops":"Shops","addproduct":"Add Product"}},"email":{"text":"Email","list":{"inbox":"Inbox","reademail":"Read Email"}},"kanban":{"text":"Kanban Board"},"pages":{"text":"Pages"},"authentication":{"text":"Authentication","list":{"login":"Login","register":"Register","recoverpwd":"Recover Password","lockscreen":"Lock screen"}},"utility":{"text":"Utility","list":{"starter":"Starter Page","maintenance":"Maintenance","comingsoon":"Coming Soon","timeline":"Timeline","faqs":"FAQs","pricing":"Pricing","error404":"Error 404","error500":"Error 500"}},"components":{"text":"Components"},"uielements":{"text":"UI Elements","list":{"alerts":"Alerts","buttons":"Buttons","cards":"Cards","carousel":"Carousel","dropdowns":"Dropdowns","grid":"Grid","images":"Images","modals":"Modals","rangeslider":"Range Slider","progressbar":"Progress Bars","sweetalert":"Sweet Alert","tabs":"Tabs & Accordions","typography":"Typography","video":"Video","general":"General","lightbox":"Lightbox","sessiontimeout":"Session Timeout","rating":"Rating","notifications":"Notifications"}},"forms":{"text":"Forms","badge":"8","list":{"elements":"Form Elements","validation":"Form Validation","advanced":"Form Advanced","editor":"Form Editor","fileupload":"Form File Upload","wizard":"Form Wizard","mask":"Form Mask"}},"tables":{"text":"Tables","list":{"basic":"Basic Tables","advanced":"Advanced Table"}},"charts":{"text":"Charts","list":{"apex":"Apex Chart","chartjs":"Chartjs Chart","chartist":"Chartist Chart","echart":"E Chart"}},"icons":{"text":"Icons","list":{"remix":"Remix Icons","materialdesign":"Material Design","dripicons":"Dripicons","fontawesome":"Font Awesome 5"}},"maps":{"text":"Maps","list":{"googlemap":"Google Maps","leaflet":"Leaflet Maps"}},"multilevel":{"text":"Multi Level","list":{"level1":{"1":"Level 1.1","2":"Level 1.2","level2":{"1":"Level 2.1","2":"Level 2.2"}}}}}}'
            );
        },
        f693: function (e) {
            e.exports = JSON.parse(
                '{"navbar":{"search":{"text":"Chercher..."},"dropdown":{"megamenu":{"text":"Mega Menu","uicontent":{"title":"Composants de l\'interface utilisateur","list":{"lightbox":"Boite à lumière","rangeslider":"Curseur de plage","sweetalert":"Sweet Alert","rating":"Évaluation","forms":"Formes","tables":"les tables","charts":"Graphiques"}},"application":{"title":"Applications","list":{"ecommerce":"Commerce électronique","calendar":"Calendrier","email":"Email","projects":"Projets","tasks":"Tâches","contacts":"Contacts"}},"extrapages":{"title":"Pages supplémentaires","list":{"lightsidebar":"Barre latérale légère","compactsidebar":"Barre latérale compacte","horizontallayout":"Disposition horizontale","maintenance":"Entretien","comingsoon":"Bientôt disponible","timeline":"Chronologie","faqs":"FAQ"}}},"site":{"list":{"github":"GitHub","bitbucket":"Bitbucket","dribbble":"Dribble","dropbox":"Dropbox","mailchimp":"Mail Chimp","slack":"Molle"}},"notification":{"text":"Notifications","subtext":"Voir tout","order":{"title":"Votre commande est passée","text":"Si plusieurs langues fusionnent la grammaire","time":"Il y a 3 minutes"},"james":{"title":"James Lemire","text":"It will seem like simplified English.","time":"Il y a 1 heure"},"item":{"title":"Votre article est expédié","text":"Si plusieurs langues fusionnent la grammaire","time":"Il y a 3 minutes"},"salena":{"title":"Salena Layfield","text":"As a skeptical Cambridge friend of mine occidental.","time":"Il y a 1 heure"},"button":"Charger plus.."},"kevin":{"text":"Admin","list":{"profile":"Profile","mywallet":"Portefeuille","settings":"Réglages","lockscreen":"Écran verrouillé","closeproject":"Fermer projet","reloadproject":"Recharger projet","logout":"Se déconnecter"}}}},"menuitems":{"menu":{"text":"Tableaux de bord"},"system":{"text":"Système","list":{"status":"Statut","controls":"Controles","utilities":"Utilitaires"}},"dashboard":{"text":"Vue pilote","badge":"3"},"dashboard_prognosis":{"text":"Prognosis","badge":"3"},"layouts":{"text":"Disposition","list":{"horizontal":"Horizontale","lightsidebar":"Barre latérale légère","compactsidebar":"Barre latérale compacte","iconsidebar":"Barre latérale des icônes","boxed":"Disposition en boîte","vertical":"Verticale","lighttopbar":"Barre supérieure légère"}},"apps":{"text":"Apps"},"calendar":{"text":"Calendrier"},"chat":{"text":"Bavarder","badge":"Nouvelle"},"ecommerce":{"text":"Commerce électronique","list":{"products":"Des produits","productdetail":"Product Detail","orders":"Ordres","customers":"Les clients","cart":"Chariot","checkout":"Check-out","shops":"Magasins","addproduct":"Ajouter un produit"}},"email":{"text":"Email","list":{"inbox":"Boîte de réception","reademail":"Lire l\'e-mail"}},"kanban":{"text":"Tableau Kanban"},"pages":{"text":"Pages"},"authentication":{"text":"Authentification","list":{"login":"S\'identifier","register":"S\'inscrire","recoverpwd":"Récupérer mot de passe","lockscreen":"Écran verrouillé"}},"utility":{"text":"Utilitaire","list":{"starter":"Page de démarrage","maintenance":"Entretien","comingsoon":"Bientôt disponible","timeline":"Chronologie","faqs":"FAQ","pricing":"Tarification","error404":"Erreur 404","error500":"Erreur 500"}},"components":{"text":"Composantes"},"uielements":{"text":"Éléments de l\'interface utilisateur","list":{"alerts":"Alerts","buttons":"Boutons","cards":"Cartes","carousel":"Carrousel","dropdowns":"Liste déroulante","grid":"la grille","images":"Images","modals":"Modals","rangeslider":"Curseur de plage","progressbar":"Barres de progression","sweetalert":"Sweet Alert","tabs":"Tablatures et accordéons","typography":"Typographie","video":"Vidéo","general":"Générale","lightbox":"Boite à lumière","sessiontimeout":"Expiration de la session","rating":"Évaluation","notifications":"Notifications"}},"forms":{"text":"Formes","badge":"8","list":{"elements":"Éléments de formulaire","validation":"Validation de formulaire","advanced":"Formulaire avancé","editor":"Éditeur de formulaires","fileupload":"Téléchargement de fichier de formulaire","wizard":"Assistant de formulaire","mask":"Masque de forme"}},"tables":{"text":"les tables","list":{"basic":"Tableaux de base","advanced":"Tableau avancé"}},"charts":{"text":"Graphiques","list":{"apex":"Graphique Apex","chartjs":"Graphique Chartjs","chartist":"Graphique Chartist","echart":"Graphique E"}},"icons":{"text":"Icônes","list":{"remix":"Remix Icons","materialdesign":"Conception matérielle","dripicons":"Dripicons","fontawesome":"Police géniale"}},"maps":{"text":"Plans","list":{"googlemap":"Google Maps","leaflet":"Cartes des dépliants"}},"multilevel":{"text":"Multi niveaux","list":{"level1":{"1":"Niveau 1.1","2":"Niveau 1.2","level2":{"1":"Niveau 2.1","2":"Niveau 2.2"}}}}}}'
            );
        },
    },
    [[0, "runtime", "chunk-vendors"]],
]);
