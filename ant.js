var Ant = function() {
            this.position = new PVector(600/2, 600/2);
            this.velocity = new PVector(0, 0);
            this.acceleration = new PVector(0, 0);
            this.target = new PVector(20, 20);
            this.randomTarget = true;
        };

        Ant.prototype.update = function() {
            
            var mouse = new PVector(random(-150, 150) + 600/2, random(-150, 150) + 600/2);
            var dir = PVector.sub(this.target, this.position);
            this.acceleration = dir;
            this.velocity = dir;
            this.velocity.limit(2);
            this.position.add(this.velocity);

            if(this.randomTarget) {
                console.log(this.target);
                //this.target.set(random(-50, 50) + this.position, random(-50, 50) + this.position);
                
            }
        };

        Ant.prototype.display = function() {
            stroke(0);
            strokeWeight(2);
            fill(127);
            ellipse(this.position.x, this.position.y, 10, 10);
        };