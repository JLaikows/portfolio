export const articleContainer = (color: string) => ({
    position: 'relative',
    backgroundColor: '#F6F6F6',
    padding: '0%',
    border: `3px solid ${color}`,
    borderRadius: '15px',
    width: '250px',
    height: '400px',
    '&:hover': {
        cursor: 'pointer'
    }
})