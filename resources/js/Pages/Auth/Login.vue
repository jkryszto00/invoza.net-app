<template>
    <div>
        <h1>login</h1>
        <form>
            <div class="form-input-section">
                <label for="email" class="input-label">Address email</label>
                <input type="text" name="email" id="email" placeholder="Your e-mail address" required>
            </div>
            <div class="form-input-section">
                <label for="password" class="input-label">Password</label>
                <input type="password" name="password" id="password" placeholder="Youre secret password" required>
            </div>
            <div class="form-submit-section">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>
<style>
.input-label {
    display: block;
}

.form-input-section {
    margin: 10px 0 10px 0;
}

.form-submit-section {
    margin-top: 15px;
}
</style>
<script setup>
</script>
