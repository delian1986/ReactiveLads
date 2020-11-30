# Meeting Notes - 16.11.2020

## Въпроси към Стан

- До каква степен можем да едитираме предоставените данни и дали е ОК да тръгнем в тази посока?
- ОК ли е да имплементираме показването на materials чрез pagination вместо lazy loading(или е по-добре да се концентрираме върху lazy loading)?
- Валидна допълнителна функционалност ли би било ако имплементираме роли, админ панел, едитира ресурси или друго?
- Какво мислиш за функционалност, която предоставя възможност за запазване на текущите активни филтри и съответно панел, който дава достъп да избираш вече запазени филтри.

## UI notes

- login view
- user details - edit first name, last name and picture options must be present.
- main layout - 2 panes, one with filter tabs, another with all materials filtered by selected criteria as per the project description. Favorites - add option to the layout with all materials. Favorite check box should be present and if enabled all filters should be applied on favorite materials only. Each material should have a button to add to user's favorites.

## UI options to consider

- details page of each individual material and an option to edit its details(material, color, tags)
- presets functionality added to the main layout - user can save his current filters by a given name and apply them later on.

## UI Prototyping Tools

- https://www.invisionapp.com/
- https://origami.design/
- https://www.sketch.com/
- https://webflow.com/
- https://www.atomic.io/
- https://www.figma.com/prototyping/
- https://proto.io/

# 24.November.2020

- user details - security (delete), leave only change password link button
- remove forgot password
  no editing of tags colors and materials
- add balls preview screen

- search box must search by all properties;
  user should be able to add search criteria 
  ex: by industry | by filename
  if nothing specified -> search everything