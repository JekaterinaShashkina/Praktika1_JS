export const calculateStatistics = (trainings) => {
    if (!trainings.length) return {
        totalTrainings: 0,
        avgDuration: 0,
        weeklyTrainings: 0,
        completedPercentage: 0
    };

    const totalTrainings = trainings.length;
    const totalDuration = trainings.reduce((sum, t) => sum + Number(t.Training_time), 0);
    const avgDuration = (totalDuration / totalTrainings).toFixed(1); 
    const weeklyTrainings = trainings.reduce((sum, t) => sum + Number(t.Weekly_sessions), 0);

    const completedCount = trainings.filter(t => t.statue === "Completed").length;
    const completedPercentage = ((completedCount / totalTrainings) * 100).toFixed(1);

    return {
        totalTrainings,
        avgDuration,
        weeklyTrainings,
        completedPercentage
    };
};
