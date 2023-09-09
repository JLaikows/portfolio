export const loginFormContainer = {
    backgroundColor: '#F6F6F6',
    padding: '20px 20px 10px 20px',
    border: "10px solid #221D23",
    borderRadius: '15px',
    width: '500px'
}

export const loginFormHeader = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}

export const loginFormSelectors = (isSelected: boolean) => ({
    color: "#221D23",
    fontSize: '40px',
    fontWeight: '600',
    cursor: 'auto',
    ...(!isSelected && {
        color: "#534359",
        "&:hover": {
            cursor: 'pointer',
        }
    })
})