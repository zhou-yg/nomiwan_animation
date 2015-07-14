module.exports =
  getRainbowColor:(i)->
    colors = ['red','orange','blue','cyan','purple']
    colorsLen = colors.length;

    if i isnt undefined
      return colors[i%colorsLen]
    else
      this.i = 0
      return ->
        if i>=5
          i = 0
        return colors[i++%colorsLen]

