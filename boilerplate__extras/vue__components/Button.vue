<template>
	<button
		:type="submit ? 'submit' : 'button'"
		class="button"
	>
		<slot />
	</button>
</template>

<script>
	export default {
		props: {
			submit: Boolean,
		},
		data() {
			return {
				//   slotData: this.$slots.default[0].text, // Is data from slot!
			};
		},
	};
</script>

<style lang="scss" scoped>
	// main button styles in "buttons.scss"

	$btn--bgColor: $black;
	$btn--color: $white;
	$btn--padding: 0.5em 1em;
	.button {
		$button-padding: 0.4em 1.2em;
		position: relative;
		display: inline-block;
		border: none;
		margin: 0.5em auto;
		padding: $btn--padding;
		background-color: $btn--bgColor;
		color: $btn--color;
		font-family: $font-accent;
		font-size: $font-size6;
		font-weight: bold;
		text-decoration: none;
		text-transform: lowercase;
		cursor: pointer;
		height: max-content;
		height: auto;
		z-index: 3;
		&.disabled {
			cursor: not-allowed;
			&:hover {
				::after {
					position: absolute;
					width: 100%;
					height: 100%;
					content: "choose an option first";
					z-index: 3;
				}
			}
		}
		&.enabled {
			opacity: 1;
			pointer-events: all;
		}
	}

	.button:hover {
		@include hover {
			background: $base-color;
			color: rgba($color: $white, $alpha: 0.9);
			box-shadow: $shadow1;
		}
	}

	.button.effect[data-content]::after,
	.button.effect[data-content]::before {
		content: attr(data-content);
		position: absolute;
		left: 0;
		top: 0;
		padding: $btn--padding;
		opacity: 1;
		clip-path: polygon(0 0, 0 100%, 100% 100%, 0% 100%);
	}

	.effect:hover::after,
	.effect:hover::before {
		animation: highlight 650ms ease-in;
	}
	.button.effect[data-content]::after {
		z-index: 2;
		color: $white;
	}

	.button.effect[data-content]::before {
		content: attr(data-content);
		color: transparent;
		z-index: 1;
		text-shadow: 0 0 30px $white;
	}

	.button.effect[data-content]:hover::after {
		// only works when called like this
		animation: highlight 650ms linear;
	}
</style>
