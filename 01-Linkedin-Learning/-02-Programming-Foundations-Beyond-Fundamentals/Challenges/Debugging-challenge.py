def plant_recommendation(care):
    if care == 'low':
        print('alone')
    elif care == 'medium':
        print('pothos')
    elif care == 'high':
        print('orchid')

# Here the is an error
plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')
