// @desc get league info
// @route GET /api/ejffl
// @access Private
const getLeagueInfo = (req, res) => {
    res.status(200).json({message: 'get league data'})
}

// @desc set league info
// @route POST /api/ejffl
// @access Private
const setLeagueInfo = (req, res) => {
    res.status(200).json({message: 'Create league info'})
}

// @desc update league info
// @route PUT /api/ejffl/:id
// @access Private
const updateLeagueInfo = (req, res) => {
    res.status(200).json({message: `update league info ${req.params.id}`});
}

// @desc delete league info
// @route DELETE /api/ejffl:id
// @access Private
const deleteLeagueInfo = (req, res) => {
    res.status(200).json({message: `delete league info ${req.params.id}`});
}

module.exports = {
    getLeagueInfo,
    setLeagueInfo,
    updateLeagueInfo,
    deleteLeagueInfo
}