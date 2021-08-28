package keeper

import (
	"github.com/heis-en-berg/interchange/x/ibcdex/types"
)

var _ types.QueryServer = Keeper{}
