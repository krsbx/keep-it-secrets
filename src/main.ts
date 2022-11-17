import { embedMessage, extractMessage } from './stegano';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wrap">
	<h1>Vanilla JavaScript Steganography</h1>
	<h5><a target="_blank" href="https://github.com/caleboleary">Caleb O'Leary</a></h5>
	<h6>Thanks to <a target="_blank" href="https://github.com/steveosoule">Steven Soule</a> for some suggested edits</h6>
	<h4>From Wikipedia - 'Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video.'</h4>
	<p>This tool creates a canvas with your image, and an identically sized canvas with your text. It then searches through each pixel of the text canvas, if it sees black, it knows the pixel it's viewing is part of the message. It will find the pixel at the same point in your image canvas, and make sure that the green value of the RGB ends in a 7. If it sees white or transparent, it knows that it's not on the text, and will make sure the identically located pixel on your image canvas's green value does NOT end in 7. After this has been performed on the whole image, we now have an image where every pixel's green value does NOT end in a 7, except where it will spell a message. The decode function reverses this, it looks through the pixels of the uploaded image, and hides any pixel where it doesn't find a green value ending in 7. It's important to note that not all steganography is the same, there are other tools out there that use the alpha chanel, where we're affecting the green channel here. Images encoded with this tool should only be decoded by this tool, etc.</p>

	<h2>Encode an image with a message</h2>
	<label>Enter a message to hide within the image:</label><br/>
	<input type="password" id="message" placeholder="Enter your secret message"></br>
	<label>Upload an image image:</label><br/>
	<input type="file" id="imageLoader" name="imageLoader"/>
  <img id="img1" src="" alt="" />
	<canvas id="imageCanvas"></canvas>
	<canvas id="textCanvas"></canvas>
	<hr>
	<h2>Decode an image</h2>
	<label>Upload an image:</label><br/>
	<input type="file" id="imageLoader2" name="imageLoader2"/>
	<canvas id="imageCanvas2"></canvas>
</div>
`;

embedMessage(
  document.querySelector<HTMLInputElement>('#message')!,
  document.querySelector<HTMLImageElement>('#img1')!,
  document.querySelector<HTMLInputElement>('#imageLoader')!
);

extractMessage(document.querySelector<HTMLInputElement>('#imageLoader2')!);
