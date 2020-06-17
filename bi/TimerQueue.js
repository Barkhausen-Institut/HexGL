class TimerQeueue
{
    constructor()
    {
        this.currentTimer = null;
        this.tasks = [];

    }

    addTask(callback, argument, delay)
    {
        var time = new Date().getTime() + delay;
        //console.log("Add: " + callback + " -- " + argument.keyCode);
        this.tasks.push({ callback: callback, argument: argument, time: time });

        // If there's a scheduled task, bail out.
        if (this.currentTimer) return;

        // Otherwise, start kicking tires
        this.launchNextTask();
    };

    launchNextTask()
    {

        // If there's a scheduled task, bail out.
        if (this.currentTimer) return;

        var self = this;
        var nextTask = this.tasks.shift();

        // There's no more tasks, clean up.
        if (!nextTask) return this.clear();

        // Otherwise, schedule the next task.
        var nextDelay = nextTask.time - new Date().getTime();
        if (nextDelay <= 0)
        {
            nextTask.callback(nextTask.argument);
            self.currentTimer = null;
            self.launchNextTask();
        }
        else
        {
            this.currentTimer = setTimeout(function ()
            {
                nextTask.callback(nextTask.argument);

                self.currentTimer = null;

                // Call this function again to set up the next task.
                self.launchNextTask();
            }, nextDelay);
        }
    };

    clear()
    {
        if (this.currentTimer) clearTimeout(this.currentTimer);

        // Timer clears only destroy the timer. It doesn't null references.
        this.currentTimer = null;

        // Fast way to clear the task queue
        this.tasks.length = 0;
    };
}