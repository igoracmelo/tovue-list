<template>
	<select v-model="currentTheme">
		<option 
			v-for="theme in themes" 
			:key="theme" 
			:value="theme"
		>
			{{ theme }}
		</option>
	</select>
</template>


<script src="./ThemeSelector.js"></script>
