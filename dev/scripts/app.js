angular.module('RightAmount', ['ngRoute','ngSanitize'])
    .controller('RightAmountCtrl', ['$scope', function($scope) {
        $scope.number = 456;
        $scope.numbers = [50, 75, 3, 7, 25, 9];
        $scope.compiler = {
            c: null, 
            b: null, 
            n: null, 
            r: null,
            s: null,
            t: new Array(42), 

            sol: function(c, p, mode) {
                var i, j, k, o = [],
                    q = [],
                    l = p.length,
                    x;
                if (c == '') c = 0;
                c = parseInt(c);
                if (typeof(c) != 'number' || c < 1) {
                    this.r = 'Number to do is not a number...';
                    return
                }
                this.c = parseInt(c);
                this.b = this.c;
                this.s = {};
                j = 0;
                for (i = 0; i < l; i++) {
                    if (isNaN(k = parseInt(p[i]))) continue;
                    q[j++] = k;
                }
                if (j < 3) {
                    this.r = 'There not enough other numbers !';
                    return
                }

                this.n = j;
                for (i = 0; i < j; i++) {
                    k = i;
                    while (0 < k && o[k - 1] < q[i]) o[k] = o[--k];
                    o[k] = q[i];
                }

                for (i = 0; i < j; i++) {
                this.t[6 * j + i] = o[i];
                    if (this.c == o[i]) {
                        this.r = '<br>' + o[i];
                        return
                    }
                }
                
                x = 1;
                while (o[k = j - 1] == 1)
                    if (5 < j && o[j - 2] == 1 && o[j - 3] == 1 && o[j - 4] == 2 && o[j - 5] == 2 && o[j - 6] == 2) {
                        x = 27;
                        j = j - 6;
                    } else if (3 < j && o[j - 2] == 1 && o[j - 3] == 2 && o[j - 4] == 2) {
                    x = 9;
                    j = j - 4;
                } else {
                    v = o[--k] + 1;
                    while (0 < k && o[k - 1] < v) o[k] = o[k--];
                    o[k] = v;
                    j = j - 1;
                }
                k = j - 1;
                while (-1 < k) x *= o[k--];

                if (x < this.c) {
                    this.b = x;
                    this.m = '' + x;
                }
                while (!this.dcp(this.n)) {
                    i = this.b + 1;
                    while (typeof(this.s[i]) == 'undefined') i++;
                    j = this.b - 1;
                    while (0 < j && typeof(this.s[j]) == 'undefined') j--;
                    if ((this.b - j) <= (i - this.b)) this.b = j;
                    else this.b = i;
                    this.m = '' + this.b;
                    this.s = {};
                }
            },

            dcp: function(a) {
                var i, j, k, v = (a << 3) - a,
                    u = v - a,
                    x, y, w;
                for (i = u; i < v; i++)
                    for (j = u; j < v; j++) {
                        if (i == j || (x = this.t[i]) < (y = this.t[j])) continue;
                        
                        if ((w = x + y) == this.b) {
                            this.r = '<br> ' + x + ' + ' + y + ' = ' + w;
                            return 1;
                        }

                        k = u - 5;
                        for (var l = u; l < v; l++) {
                            if (l == i || l == j) continue;
                            this.t[k++] = this.t[l];
                        }
                        k = u - 6;
                        this.s[w] = 1;
                        this.t[k] = w;
                        if (this.dcp(a - 1) == 1) {
                            if (-1 < this.r.search(new RegExp(' ' + w + ' '))) this.r = '<br> ' + this.t[i] + ' + ' + this.t[j] + ' = ' + w + this.r;
                            return 1;
                        }

                        if (x != y && x != y << 1) {
                            if ((w = x - y) == this.b) {
                                this.r = '<br> ' + x + ' - ' + y + ' = ' + w;
                                return 1;
                            }
                            this.s[w] = 1;
                            this.t[k] = w;
                            if (this.dcp(a - 1) == 1) {
                                if (-1 < this.r.search(new RegExp(' ' + w + ' '))) this.r = '<br> ' + this.t[i] + ' - ' + this.t[j] + ' = ' + w + this.r;
                                return 1;
                            }
                        }
                        
                        if (1 < x && 1 < y) {
                            if ((w = x * y) == this.b) {
                                this.r = '<br> ' + x + ' x ' + y + ' = ' + w;
                                return 1;
                            }
                            this.s[w] = 1;
                            this.t[k] = w;
                            if (this.dcp(a - 1) == 1) {
                                if (-1 < this.r.search(new RegExp(' ' + w + ' '))) this.r = '<br> ' + this.t[i] + ' x ' + this.t[j] + ' = ' + w + this.r;
                                return 1;
                            }
                        }
                        
                        if (1 < y && x % y == 0 && x != y * y) {
                            if ((w = x / y) == this.b) {
                                this.r = '<br> ' + x + ' / ' + y + ' = ' + w;
                                return 1;
                            }
                            this.s[w] = 1;
                            this.t[k] = w;
                            if (this.dcp(a - 1) == 1) {
                                if (-1 < this.r.search(new RegExp(' ' + w + ' '))) this.r = '<br> ' + this.t[i] + ' / ' + this.t[j] + ' = ' + w + this.r;
                                return 1;
                            }
                        }
                    }
                return 0;
            }
        };
        

        $scope.compile = function(){
            $scope.compiler.sol($scope.number, $scope.numbers);
        };
        
        $scope.compile();

 }]);