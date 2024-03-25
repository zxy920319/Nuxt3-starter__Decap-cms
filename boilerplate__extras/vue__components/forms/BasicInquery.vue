<template>
	<div id="basic-inquery">
		<form name="contact-formulier" class="form" method="POST" netlify netlify-honeypot="gotcha" action="/success">
			<input type="hidden" name="form-name" value="contact-formulier" />
			<fieldset>
				<div class="gotcha--protectron">
					<label>&#x26A0;<input name="gotcha" /> </label>
				</div>
				<h2>Get in touch</h2>
				<FormsComponentsInputName @payload="validateInput" name="name" inputID="name" label="your name:"
					class="input-name" required></FormsComponentsInputName>
				<FormsComponentsInputEmail @payload="validateInput" name="email" inputID="email" label="email:"
					class="input-email" required>
				</FormsComponentsInputEmail>
				<FormsComponentsInputSubject @payload="validateInput" name="subject" inputID="subject" label="subject"
					class="input-subject" required></FormsComponentsInputSubject>
				<FormsComponentsInputTextarea @payload="validateInput" :rows="4" name="message" inputID="message"
					label="your message:" required></FormsComponentsInputTextarea>
			</fieldset>
			<fieldset>
				<Button class="effect" type="submit" :class="submitActive ? 'enabled effect' : 'disabled'" :key="setLocale">{{ btnSend }}</Button>
			</fieldset>
		</form>
	</div>
</template>

<script setup>

const setLocale = useState("setLocale");

const submitActive = ref(false);
const formData = reactive([]);

const btnSend = useBtnData('send');

function validateInput(payload) {
	// form validation
	let fdObject = formData.find((Object) => Object.entry.fieldLabel === payload.fieldLabel);
	if (fdObject) {
		fdObject.entry.fieldValue = payload.fieldValue;
		fdObject.entry.fieldValidity = payload.fieldValidity;
		// Check required fields's validity: set submitActive to true if array.every returns true
		submitActive.value = formData.every((Object) => Object.entry.fieldValidity === true);
	} else {
		// Array is empty, push object into:
		formData.push({ entry: payload });
	}
}
</script>

<style lang="scss" scoped>
.gotcha--protectron {
	opacity: 0;
	height: 0;
	max-height: 0;
	z-index: -10;
	position: absolute;
}

fieldset {
	display: grid;
	column-gap: $spacing2;
	font-size: 1.2em;

	span {
		display: block;
		padding: $spacing1 $spacing2;
		padding-top: $spacing2;
		background: $white;
		color: $black;
		border-right: none;
		margin-bottom: $spacing2;
	}

	button.button {
		top: $spacing3;
	}
}

@include media(xsm, sm) {
	button.button {
		grid-row: 4;
		margin: auto;
	}
}

@include media(sm, md) {
	fieldset {
		display: grid;
		column-gap: $spacing2;
		font-size: 1em;

		span {
			grid-column: 1 / 3;
			grid-row: 1;
		}

		.input-name,
		.input-email {
			grid-row: 2;
		}

		.input-name {
			grid-column: 1;
		}

		.input-name {
			grid-column: 2;
		}

		.input-subject {
			grid-column: 1 / 3;
			grid-row: 3;
		}

		.input-type-textarea {
			grid-column: 1 / 3;
			grid-row: 4;
		}
	}
}
</style>
