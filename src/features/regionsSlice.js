import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      // 0
      ad: "Qazax-Tovuz",
      zone: "",
      path: "M79.028,157.314l4.652,1.116l1.311,4.479l-1.683,3.605l-4.28-1.471l-1.475-1.908l-0.738-2.361l0.384-2.167   L79.028,157.314z M126.512,168.356l-5.497,2.754l-2.689-0.436l-5.17-2.133l-5.56-0.654l-1.939-1.632l-1.829-1.98l-2.414-1.503   l-3.853-4.027l-1.951-1.051l-0.341,2.846L94.55,162.4l-2.28-0.234l-2.554-1.73l-1.518-2.612l1.256-5.032l11.669,0.494l4.048-2.97   l-0.152-2.493l-1.53-2.227l-6.176-4.859l-2.018-0.656l-7.706-0.008l-2.024-0.875l-0.652-1.945l1.189-3.307l-4.365-9.302   l11.259-9.341l17.907-14.875l3.786-1.326l3.859,0.203l2.203,1.146l5.68,2.953l1.835,0.366l2.378-0.211l3.902-1.195l1.744,0.317   l1.707,1.968l3.841,3.633l16.96,6.637l7.682,1.567l2.756,1.104l0.146,0.974l-1.683,0.925l-2.707,0.966l-2.621,3.279l2.817,4.478   l4.877,4.193l2.271,1.396l5.947,3.654l17.509,6.351l5.694,0.704l2.853-0.259l2.329-0.859l3.097-1.996l3.011-1.941l2.628-0.608   l8.87-0.041l2.122,0.745l1.866,1.831l3.426,4.3l6.95,6.33l2.451,1.465l7.023,2.298l1.933,1.707l3.298,4.464l2.115,1.301   l2.579-0.113l1.036-1.633l0.659-2.458l1.329-2.507l2.493-1.569l2.31,0.227l2.243,0.615l2.317-0.372l1.622-2.291l3.456,2.647   l5.371,0.194l4.707,2.831l0.506,4.362l0.707,4.562l1.707,3.575l0.555,4.147l-1.079,6.231l0.384,6.147l0.378,6.594l-0.982,6.296   l-2.067,6.035l2.737,4.539l4.743,0.708l3.944,2.731l-2.963,4.781l-3.615,5.011l2.122,3.427l4.731-2.912l4.042,0.378l3.018,3.378   l-0.189,6.641l0.677,6.761l3.384,1.075l3.627-0.505l0.988,1.42l-0.506,2.378l-1.274,3.295l-2.719,1.242l-2.817,2.701l-2.646,2.596   l-2.329,1.506l-2.28,1.69l-2.402,1.85l-1.146,0.671l-1.397,0.818l-4.396,0.136l-0.882-0.032l-3.532-0.128l-5.846,2.61l-5.682,3.553   l-4.435,1.721l-1.358,0.527l-0.742,0.288l-1.639,2.157l-1.67,2.197l-0.758,0.997l-12.4,7.749l-8.542-1.322l-4.621-0.715   l-9.882-1.474l-9.23-3.373l-8.249,0.823l-8.175-0.643l-7.419-1.347l-6.639,2.586l-1.036,5.566l-0.011,0.061l-0.8,0.235   l-2.365-0.128l-5.017-5.548l-0.092-0.102l-27.483-15.623l-6.987-6.558l-3.816-8.158l-0.994-1.804l-2.445-1.62l-1.091-1.227   l-0.543-1.668l-0.268-3.434l-0.463-1.533l-2.055-2.576l-2.384-1.887l-2.268-2.24l-1.683-3.606l0.005-2.889l0.007-3.732l2.969-5.234   l4.615-3.805l4.767-2.305l9.145-4.423l3.109-3.551l2.213-6.421l-0.213-3.45l-2.048-1.088l-2.78-0.202l-2.402-0.774l-1.865-1.911   l-5.048-6.518l-3.121-2.575l-1.176-0.311l-1.665-0.44l-1.451-1.582l1.036-5.055l-0.719-3.7l-3.256,0.356L126.512,168.356z    M142.053,232.179l3.951-3.044l1.597-4.057l-3.073-1.752l-1.707-0.233l-1.725,0.032l-1.628,0.482l-1.475,1.069l-0.695,1.543   l-0.244,1.623l0.232,1.622l0.707,1.494L142.053,232.179z M106.218,175.148l-2.731-0.444l-1.134-3.594l0.366-0.404l0.415-0.234   l0.463-0.073l0.488,0.089l3.377,2.932L106.218,175.148z",
    },
    {
      // 1
      ad: "Şərqi Zəngəzur",
      zone: "",
      path: "M149.592,327.764l-0.155-1.526l7.468-4.855l19.387,3.224l8.243-0.812l1.585-1.337l0.805-1.64l1.39-7.088   l0.439-1.171l2.615-2.295l2.25-3.029l1.439-3.779l2.14-9.926l0.079-0.918l-0.079-0.91l-0.219-0.894l-3.03-4.017l-1.695-1.654   l-1.719-0.911l-2.585,0.16l-1.676,0.492l0.011-0.061l1.036-5.566l6.639-2.586l7.419,1.347l8.175,0.643l8.249-0.823l9.23,3.373   l9.882,1.474l4.621,0.715l8.542,1.322l12.4-7.749l-0.439,2.73l-0.805,2.553l-1.195,0.951l-1.152,1.059l-0.543,5.635l1.286,5.508   l1.049,5.067l1.542,4.255l2.713-0.881l2.579-2.054l7.066,0.698l5.92,5.629l3.012,2.399l1.482,3.12l0.849,1.958l0.645,1.487   l2.786,3.134l-4.072,0.323l-0.954,0.545l-2.484,1.418l-4.865,0.872l-4.298,2.276l-2.603,3.867l-3.67,2.128l-3.176-2.327   l-3.615-1.786l-3.274,2.025l-2.762,1.665l-0.866,0.522l-1.634,4.604l0.933,3.97l2.707,1.78l2.433,2.328l4.085,8.505l2.018,9.62   l1.219,4.781l0.44,3.009l0.261,1.785l-0.634,1.274l-1.311,2.632l-1.597,4.209l0.469,4.088l2.615,1.005l2.286,1.108l2.036,1.812   l4.896-0.582l0.848-1.427l2.776-4.671l0.021-0.035l3.207-1.104l3.243,0.337l1.664,3.328l0.403,2.926l0.194,1.41l-5.304,0.87   l-1.97,2.256l-1.176,1.346l2.036,2.234l0.302,1.658l0.332,1.826l0.079,0.436l-2.231,3.24l-3.268,2.247l2.902,0.58l2.859,0.427   l2.481-0.608l2.481-0.648l2.042,1.493l0.818,1.329l0.621,1.009l-0.38,1.191l-0.778,2.436l-2.097,3.054l-2.786,2.702l-0.756,4.725   l1.683,3.331l2.25,3.401l0.402,5.023l1.829,4.324l4.042,2.397l3.884,2.81l4.054,5.287l1.061,4.176l0.015,0.058l-0.027,0.013   l-1.792,1.502l-1.603,1.863l-3.03,5.281l-0.671,0.931l-0.939,0.762l-1.951,1.064l-0.914,0.762l-1.433,2.246l-1.981,4.609   l-1.939,1.868l-6.84,3.5l-2.152,1.816l-1.573,2.043l-3.323,6.899l-1.353,2.171l-1.634,1.818l-1.829,1.512l-1.902,1.198   l-2.555,1.034l-2.128,0.125l-4.097-8.673l-0.5-1.771l-0.116-1.846l0.201-1.878l0.415-1.843l0.171-0.435l0.085-0.479l1.548-4.821   l0.341-4.254l-0.658-4.311l-1.488-4.996l-2.853-2.306l-3.926-2.236l-3.018-3.011l-0.116-4.68l2.719-2.549l4.133,0.535l7.17,3.65   l1.451-0.212l5.469-3.91l2.481-0.094l1.036-0.511l-0.409-1.066l-0.151-0.394l-0.793-0.913l-0.78-0.716l-5.036-3.546l-2.853-3.016   l-1.146-2.245l-0.622-2.426l-0.872-2.214l-1.884-1.561l-8.486-3.8l-3.865-3.005l-1.622-4.796l1.548-3.93l3.743-2.321l8.639-1.626   l0.043-0.008l1.427-0.695l0.805-1.121l0.043-1.43l-0.811-1.611l0.037-2.528l1.378-1.264l1.719-1.067l1.061-1.944l-0.354-2.522   l-1.445-1.977l-1.957-1.281l-1.902-0.419l-7.45,0.712l-2.329-0.403l-1.768-1.281l-2.78-3.774l-1.671-1.369l-4.036-0.293   l-8.06,4.139l-4.097,0.854l-2.621-0.815l-1.731-1.661l-2.768-5.263l-1.701-2.098l-2.03-1.148l-4.475-1.299l-3.707-2.978   l-4.548-9.257l-3.225-3.156l-7.444-2.253l-3.888-1.995l-2.514-1.29l-5.316-5.318l-0.908-1.854l-5.274-10.889l-2.554-2.838   l-3.225-1.598l-12.303-1.272l-3.743-1.694L149.592,327.764z",
    },
    {
      // 2
      ad: "Naxçıvan",
      zone: "",
      path: "M90.3,363.756l7.817,10.034l1.213,2.558l0.512,2.835l-0.195,3.578l-1.158,5.516l0.463,2.231l2.311,1.487   l4.347-1.036l3.353-3.125l3.158-1.068l0.736,1.039l2.935,4.143l1.396,3.179l1.189,1.723l1.719,0.696l5.584,0.522l2.061,1.083   l3.726,3.815l0.017,0.017l1.268,0.743l1.329,0.205l1.341-0.269l1.317-0.671l1.256-0.537l9.486-6.061l3.158-1.312l14.466-3.524   l0.66-0.161l2.737-0.048l3.255,1.258l2.67,1.929l1.061,1.929l0.024,2.592l-0.384,3.888v0.016l1.067,6.981l-0.524,2.408   l-3.969,6.557l-0.75,3.052l0.677,1.578l0.311,0.724l6.694,1.727l2.426,1.986l2.243,2.443l2.817,2.19l1.721,0.845l6.729,3.306   l2.408,2.307l0.774,1.197l0.268,1.149l-0.244,1.098l-0.799,1.027l-2.847,3.761l-0.719,3.874l1.073,3.998l2.493,4.119l3.066,4.408   l2.39,4.814l6.145,17.197l6.877,13.158l-1.158,0.157l-6.852-1.734l-7.803-3.54l-24.862-5.25l-2.715-1.067l-6.04-2.374l-10.51-0.11   l-6.718-1.65l-3.268-0.114l-0.894-0.201l-0.557-0.125l-2.426-1.423l-1.858-0.495l-1.41-0.376l-2.682-1.326l-2.506-1.687   l-1.36-1.616l-0.213-1.632l0.348-1.287l0.482-1.272l0.262-1.566l-0.567-1.017l-2.817-1.276l-1.116-0.829l-0.597-1.28l-0.927-3.268   l-0.488-1.202l-1.11-1.186l-1.097-0.648l-1.024-0.774l-0.786-1.54l1.018-2.244l-0.671-1.631l-1.573-0.991l-1.646-0.33l-1.158-0.562   l0.024-1.302l0.305-1.432l-0.329-0.956l-1.109-0.13l-1.073,0.421l-0.817,0.562l-0.305,0.283l-12.29-4.076l-3.091,0.96l-0.762-2.306   l-1.231-7.59l-0.817-1.646l-1.006-1.465l-0.711-1.594l-2.16-4.844l-0.951-1.466l-1.091-0.615l-1.189-1.443l-0.963-1.585   l-0.39-1.088l-0.646-0.781l-0.055-0.037l-4.201-2.882l-0.415-0.537l-0.256-0.694l-0.421-0.6l-0.921-0.253l-1.28,0.039l-0.616-0.126   l-3.006-2.186l-0.439-1.089l0.982-1.855l-2.469-2.187l-1.451-3.08l-3.536-14.703l-1.414-3.307l-2.487-1.78l0.463-0.451l0.354-0.697   l-2.719-0.079l-2.524-0.491l-0.458-0.267l-1.688-0.984l-0.313-0.45l-1.327-1.909l-1.347-5.806l-1.152-1.925l3.347-1.474   l5.475-0.999l5.158,0.079l4.024-0.967l3.074-1.727l0.694-0.39l4.353-3.37l4.426-1.523l4.011,2.022L90.3,363.756z",
    },
    {
      // 3
      ad: "Şəki-Zaqatala",
      zone: "",
      path: "M250.26,30l2.53,0.676l3.182-0.131l5.45,0.745l2.128,1.269l0.658,2.996l-0.567,6.431l0.652,2.691l2.091,1.754   l2.243-0.016l2.048-1.329l3.841-3.378l2.426-0.867l4.768-0.986l1.423-1.083l0.711-0.541l1.987-2.046l0.988,0.025l0.5,1.759   l1.061,6.213l0.634,2.151l1.146,1.831l7.749,7.191l2.018,1.25l1.488,0.421l3.073,0.408l1.378,0.686l0.549,0.919l0.634,2.895   l0.439,1.212l1.597,2.167l5.865,5.01l2.914,4.746l1.024,4.72l1.701,2.925l0.145-0.02l4.823-0.664l2.256-0.896l2.268-0.465   l2.134,0.57l1.865,2.192l0.866,2.729l0.415,2.671l0.835,2.304l2.085,1.579l0.262,0.285l0.927,0.952l0.561,1.408l0.39,1.53   l0.634,1.595l3.652,4.611l0.896,1.862l0.439,3.844l-0.219,8.229l1.171,3.597l2.073,2.078l8.974,5.428l2.691,1.011l0.979,0.368   l12.217,1.176l2.573,0.884l3.329,4.669l2.14,1.71l2.414,0.024l4.176-2.788l2.28-0.908l2.366,0.284l6.175,3.155l3.5,1.788   l2.262,0.478l8.23-0.738l0.891,1.986l3.762,2.511l4.31,0.98l4.365,0.745l3.018,9.316l9.328,5.492l-1.847,2.155l-1.323,2.659   l-0.616,2.881l-0.969,2.496l-1.622-0.38l-1.67-0.206l-1.03,1.64l-0.628,1.91l1.207,5.118l2.865,4.906l-0.384,4.852l-3.438,2.906   l-1.762,0.327l-1.53,0.601l-0.396,3.441l-0.11,3.581l-4.56,3.652l-5.359,2.423l-3.457,2.95l-2.433,4.55l-2.999,4.142l-3.17,3.952   l-3.871,1.861l-4.194,0.133l-4.572,1.081l-4.335,2.447l-3.847-2.246l-2.865-3.126l-0.299-6.815l-0.421-6.799l-4.658,0.897   l-4.493-1.062l-2.073-1.038l-2.091-0.644l-1.171,0.555l-0.933,0.572l-2.884-0.024l-2.945-1.292l-4.853-1.22l-4.902-1.01   l-8.974-3.91l-8.998-3.726l-10.577-5.941l-10.718-5.464l-9.949-5.467l-10.138-3.128l-0.555-4.147l-1.707-3.575l-0.707-4.562   l-0.506-4.362l-4.707-2.831l-5.371-0.194l-3.456-2.647l0.658-0.929l0.988-5.035l0.622-5.377l1.146-4.221l0.695-0.972l1.561-1.467   l0.695-0.997l0.25-1.029l0.128-2.749l0.232-1.208l1.036-1.225l0.976,0.146l0.366-0.195l-0.744-2.288l-3.707-5.697l-2.28-2.565   l-0.793-1.348l-0.141-0.094l-0.822-0.548l-1.829,0.723l-1.865-4.386l-5.792-3.47l-11.486-4.869l-5.523-5.156l-2.402-0.594   l-1.378-0.643l-6.17-4.28l-2.03-2.621l-1.049-3.428l-0.941-6.153l-0.174-1.139l-2.621-5.038l-0.268-0.881l-1.634,0.065l-0.78,1.19   l-0.585,1.455l-1.036,0.856l-3.176-2.662l-1.506-7.1l-0.055-8.012l1.116-5.415l2.28-2.431l2.573-0.286l5.523,1.267l2.457-0.237   l1.884-0.923l1.719-1.545l5.072-6.214l2.53-4.115L250.26,30z",
    },
    {
      // 4
      ad: "Quba-Xaçmaz",
      zone: "",
      path: "M489.904,56.818l8.075-10.498l5.697-9.167l1.229,1.095l3.629,2.21l4.167,3.768l10.407,14.498l4.032,4.095   l1.651,2.462l0.682,3.836l8.055,9.111l4.503,9.776l2.391,0.878l1.987,2.077l1.498,2.448l0.979,2.038l2.736,4.036l0.48,0.941   l0.595,0.647l2.919,0.89l0.989,0.557l1.757,2.65l4.263,8.938l0.009,0.018l3.563,7.487l1.709,2.524l1.479,2.938l0.71,3.423   l1.459,13.598l0.749,2.876l1.296,1.211l0.806,1.804l2.007,11.204l5.626,9.392l14.151,16.085l0.978,1.49l-0.504,0.209l-4.725-0.121   l-4.542,0.814l-5.542,1.512l-5.779-0.52l-4.981-1.79l-4.706-3.016l-3.329-1.275l-2.938-2.065l-0.823-5.783l-2.615-2.249   l-2.567,0.872l-1.853,2.091l-0.555,2.522l-0.792,2.284l-3.835,2.287l-4.249,1.331l-3.847,1.444l-3.969,0.234l-3.884,2.459   l-3.518,3.382l-5.956-3.297l-6.054-2.947l-7.895-2.323l-7.651-3.264l-9.218-2.659l-9.547-0.089l-6.938-6.209l-8.925-0.638   l-6.413-3.005l-6.298-3.673l-3.304-1.879l-3.347-1.423l-3.536-0.311l-3.487-0.788l-9.328-5.492l-3.018-9.316l-4.365-0.745   l-4.31-0.98l-3.762-2.511l-0.891-1.986l1.799-0.161l4.999-1.532l2.774-1.742l0.5-1.532l-0.597-2.01l-0.536-3.227l0.341-3.269   l1.097-1.525l1.573-1.136l1.731-2.094l1-2.857l0.561-2.46l1.244-1.316l3.06,0.528l2.652-1.519l3.883-11.256l2.237-4.351   l3.896-2.416l13.601-2.653l3.481-1.888l6.176-5.366l10.199-6.404l2.701-2.955l2.384-4.534l4.975-13.707L489.904,56.818z",
    },
    {
      // 5
      ad: "Aran",
      zone: "",
      path: "M430.385,370.285l-0.053-0.014l-1.366,2.052l-1.232,1.141l-1.451,0.364l-8.974-0.174l-2.804,0.76l-2.28,1.592   l-1.836,1.882l-5.065,5.188l-14.193,8.019l0-0.071l-0.006-6.175l-7.486-6.289l-2.579-4.146l-2.847-3.32l-3.92-1.046l-1.926-4.534   l-9.157,2.216l-9.059,2.437l3.286-6.465l-1.792-5.929l-1.513-0.964l-4.322-2.754l-2.001-4.456l-1.035-2.304l0.933-0.572   l0.878-0.731l2.524-5.387l-2.682-4.455l-5.188,0.787l-5.005,1.9l-0.076-0.016l-9.611-2.07l-2.609-7.567l1.518-0.943l1.475-1.185   l0.293-4.294l0.183-4.232l3.639-1.159l0.738-0.235l3.268-2.947l-3.524-3.036l0.476-3.523l5.542-3.6l4.859-4.914l-8.462-0.243   l-8.358,0.694l-0.524-2.948l-0.744-2.837l-0.28-5.298l0.299-5.316l0.238-4.436l-3.444-1.263l-2.798-2.563l-2.048-3.779   l-1.664-1.224l-1.293-1.624l-0.786-3.578l-0.756-3.627l-2.103-2.342l-1.768-2.655l-0.591-2.576l-0.884-2.392l2.719-1.242   l1.274-3.295l0.506-2.378l-0.988-1.42l-3.627,0.505l-3.384-1.075l-0.677-6.761l0.189-6.641l-3.018-3.378l-4.042-0.378l-4.731,2.912   l-2.122-3.427l3.615-5.011l2.963-4.781l-3.944-2.731l-4.743-0.708l-2.737-4.539l2.067-6.035l0.982-6.296l-0.378-6.594l-0.384-6.147   l1.079-6.231l10.138,3.128l9.949,5.467l10.718,5.464l10.577,5.941l8.998,3.726l8.974,3.91l4.902,1.01l4.853,1.22l2.945,1.292   l2.884,0.024l0.933-0.572l1.171-0.555l2.091,0.644l2.073,1.038l4.493,1.062l4.658-0.897l0.421,6.799l0.299,6.815l2.865,3.126   l3.847,2.246l4.335-2.447l4.572-1.081l4.194-0.133l3.871-1.861l4.072,1.129l4.005,1.39l3.024,1.013l2.945-0.241l5.944,0.643   l5.987,1.977l6.255,1.679l4.987,4.216l-2.902,7.124l0.457,6.249l4.835-1.175l4.743-1.837l-2.359,6.399l-1.036,6.644l3.213,3.012   l4.158-0.781l2.012,1.926l2.567,2.458l3.286-2.723l3.475-2.931l5.243-0.405l4.646,2.263l0.317,6.149l0.134,5.794l3.506,1.256   l3.335,1.684l2.597,5.221l4.036,3.369l1.524-4.716l2.445-3.466l4.755,1.155l4.658,1.359l4.841,2.862l5.066,2.414l4.054,2.002   l3.871-1.954l3.432-3.9l1.555-6.014l5.749,3.175l6.481-0.664l1.079,5.712l3.213,3.508l3.688,3.459l3.39,3.821l3.341,5.025   l3.432,4.528l4.097,1.193l4.316,0.379l5.609-0.08l5.408,0.885l2.865,3.883l0.951,5.165l2.359,4.577l2.548,4.392l0.244,3.021   l1,2.559l2.365,2.812l2.158,3.106l2.109,4.198l1.542,4.872l1.768,2.312l1.61,2.439l0.512,3.859l0.116,3.981l-1.695,5.919   l0.25,6.621l0.5,5.159l1.172,4.63l-2.535,3.086l-2.266,3.833l0.115,2.636l-1.373,2.542l-1.21,3.369l-0.931,3.549l-0.509,3.087   l0.054,2.12l0.051,2.011l1.171,2.824l10.983,10.07l1.421,1.746l0.95,1.975l-0.106,0.671l-0.528,0.54l-0.739,5.085l0.163,1.527   l0.989,1.75l-1.45-0.763l-1.085-0.956l-0.816-1.148l-0.662-1.297h-0.73l0.442,2.259l0.998,2.495l1.45,2.184l1.853,1.303v1.135   l-2.659-0.639l-1.671-1.855l-1.498-2.178l-6.048-4.022l-3.927,1.514l-3.043,3.947l-1.21,4.838l0.086,16.669l-0.413,2.001   l-1.849-2.165l-4.853-1.227l-4.597-2.32l-4.121-1.219l-3.658-2.459l-2.329-4.927l-3.451-2.996l-5.901,4.59l-5.322,6.043   l-4.627,5.03l-4.109,5.409l-7.151,0.483l-6.286-2.853l1.299-10.374l-4.231-9.632l-0.908-5.834l0.914-5.821l2.64-4.302l3.03-3.909   l-2.969,0.067l-2.884-0.722l-1.884-1.014l-1.957,0.032l-1.353,1.783l-1.006,2.166l-1.823,1.653l-0.354,2.169l-0.256,6.669   l-3.621,3.44l-3.884-2.391l-1.286-5.451l-2.689-4.341l-4.152,0.008l-3.566,4.286l-4.103,3.457l-2.445,0.303l-2.213,1.159   l-1.372,1.769l-1.701,1.458l-4.274-2.38l-0.366-7.256l-1.206-1.9l1.243-0.399l-2.621-5.53l-3.316-4.562l-8.084-7.487   l-19.826-23.885l-7.23-6.772l-2.28-1.577L430.385,370.285z",
    },
    {
      // 6
      ad: "Lənkəran",
      zone: "",
      path: "M470.954,475.468l0.553-2.054l0.061-2.115l-0.628-1.919l-3.56-7.642l-1.774-1.744l-6.743-2.806l-6.718-6.538   l-2.878-4.087l-1.585-4.08l0.219-5.232l2.17-4.332l3.414-3.27l3.975-2.065l7.389-1.49l6.206-4.203l3.061-0.982l1.206,1.9   l0.366,7.256l4.274,2.38l1.701-1.458l1.372-1.769l2.213-1.159l2.445-0.303l4.103-3.457l3.566-4.286l4.152-0.008l2.689,4.341   l1.286,5.451l3.884,2.391l3.621-3.44l0.256-6.669l0.354-2.169l1.823-1.653l1.006-2.166l1.353-1.783l1.957-0.032l1.884,1.014   l2.884,0.722l2.969-0.067l-3.03,3.909l-2.64,4.302l-0.914,5.821l0.908,5.834l4.231,9.632l-1.299,10.374l6.286,2.853l7.151-0.483   l4.109-5.409l4.627-5.03l5.322-6.043l5.901-4.59l3.451,2.996l2.329,4.927l3.658,2.459l4.121,1.219l4.597,2.32l4.853,1.227   l1.849,2.165l-0.547,2.691l-1.661,4.913l-0.566,2.369l-0.346,5.373l-0.538,3.233l-1.114,2.7l-8.852,6.226l-4.666,1.821   l-3.274-2.686l0.374-1.779l-0.038-1.223l0.173-1.019l1.104-1.155l5.3-1.038l1.815-0.939l1.555-2.324l0.96-3.035l0.106-3.042   l-1.334-2.864l-2.362-1.219l-5.636-0.167v-1.355l-0.691-6.239l-0.451-1.746l-2.093-1.765l-2.237-0.582l-5.04,0.173l-1.402,0.495   l-0.691,1.214l-0.461,1.548l-0.979,2.192l-0.096,0.774l0.038,1.652l-0.25,1.188l-0.566,0.322l-0.576-0.006l-0.288,0.155   l-0.221,7.101l0.403,3.734l1.92,3.263l-0.48,3.707l-3.168,10.892l-0.413,0.987l-2.304,5.441l-0.288,0.352l-3.341,4.076l-4.263-1.11   l0.086,5.381l0.259,2.477l0.528,2.384l0.933,2.345l1.89,4.749l0.036,1.318l0.598,21.979l0.682,25.372v0.025l-7.617-1.591   l-3.774-0.027l-2.64,1.444l-2.329,2.358l-2.987,1.875l-3.195,1.369L513.135,570l-5.446-0.452l-0.601-0.05l-3.768-3.672   l-3.219-5.406l-1.534-1.943l-2.929-3.711l-1.756-2.493l-1.987-2.178l-1.939-3.043l-1.89-1.731l-1.524-2.047l-0.823-3.997   l-1.353-3.269h-2.774l-5.981,2.797l-3.627-0.086l-2.134-2.024l-1.853-2.751l-5.718-4.594l-0.22-2.553l0.488-2.952l-0.552-2.203   l-0.313-1.25l-1.488-1.254l-15.619-7.743l-7.669-6.149l-2.341-4.32l-0.28-6.233l1.097-1.723l6.182-3.839l0.341-0.98l-0.024-1.144   l0.402-0.98l21.783-3.869l4.859-3.023l0.012-0.031h0.018l1.067-1.608l0.914-1.954L470.954,475.468z",
    },
    {
      // 7
      ad: "Qarabağ",
      zone: "",
      path: "M319.008,449.774l-7.064,4.002l-1.433,0.267l-1.768-0.48l-3.292-1.474l-1.853,0.051l-1.96,0.908l-0.015-0.058   l-1.061-4.176l-4.054-5.287l-3.884-2.81l-4.042-2.397l-1.829-4.324l-0.402-5.023l-2.25-3.401l-1.683-3.331l0.756-4.725l2.786-2.702   l2.097-3.054l0.778-2.436l0.38-1.191l-0.621-1.009l-0.818-1.329l-2.042-1.493l-2.481,0.648l-2.481,0.608l-2.859-0.427l-2.902-0.58   l3.268-2.247l2.231-3.24l-0.079-0.436l-0.332-1.826l-0.302-1.658l-2.036-2.234l1.176-1.346l1.97-2.256l5.304-0.87l-0.194-1.41   l-0.403-2.926l-1.664-3.328l-3.243-0.337l-3.207,1.104l-0.021,0.035l-2.776,4.671l-0.848,1.427l-4.896,0.582l-2.036-1.812   l-2.286-1.108l-2.615-1.005l-0.469-4.088l1.597-4.209l1.311-2.632l0.634-1.274l-0.261-1.785l-0.44-3.009l-1.219-4.781l-2.018-9.62   l-4.085-8.505l-2.433-2.328l-2.707-1.78l-0.933-3.97l1.634-4.604l0.866-0.522l2.762-1.665l3.274-2.025l3.615,1.786l3.176,2.327   l3.67-2.128l2.603-3.867l4.298-2.276l4.865-0.872l2.484-1.418l0.954-0.545l4.072-0.323l-2.786-3.134l-0.645-1.487l-0.849-1.958   l-1.482-3.12l-3.012-2.399l-5.92-5.629l-7.066-0.698l-2.579,2.054l-2.713,0.881l-1.542-4.255l-1.049-5.067l-1.286-5.508   l0.543-5.635l1.152-1.059l1.195-0.951l0.805-2.553l0.439-2.73l0.758-0.997l1.67-2.197l1.639-2.157l0.742-0.288l1.358-0.527   l4.435-1.721l5.682-3.553l5.846-2.61l3.532,0.128l0.882,0.032l4.396-0.136l1.397-0.818l1.146-0.671l2.402-1.85l2.28-1.69   l2.329-1.506l2.646-2.596l2.817-2.701l0.884,2.392l0.591,2.576l1.768,2.655l2.103,2.342l0.756,3.627l0.786,3.578l1.293,1.624   l1.664,1.224l2.048,3.779l2.798,2.563l3.444,1.263l-0.238,4.436l-0.299,5.316l0.28,5.298l0.744,2.837l0.524,2.948l8.358-0.694   l8.462,0.243l-4.859,4.914l-5.542,3.6l-0.476,3.523l3.524,3.036l-3.268,2.947l-0.738,0.235l-3.639,1.159l-0.183,4.232l-0.293,4.294   l-1.475,1.185l-1.518,0.943l2.609,7.567l9.611,2.07l0.076,0.016l5.005-1.9l5.188-0.787l2.682,4.455l-2.524,5.387l-0.878,0.731   l-0.933,0.572l1.035,2.304l2.001,4.456l4.322,2.754l1.513,0.964l1.792,5.929l-3.286,6.465l9.059-2.437l9.157-2.216l1.926,4.534   l3.92,1.046l2.847,3.32l2.579,4.146l7.486,6.289l0.006,6.175l0,0.071l-2.122,1.198l-6.243,6.364l-1.524,1.043l-2.646,0.3   l-8.255,2.829l-4.938,2.733l-3.853,3.246l-5.865,7.577l-0.014,0.014l-3.9,4.009l-3.544,2.019l-1.37,0.781l-11.754,4.596   l-5.645,3.467l-1.146,1.308l-0.402,1.52l-4.268,6.843l-1.987,5.776l-0.61,1.129l-1.231,1.467L319.008,449.774z",
    },
    {
      // 8
      ad: "Bakı",
      zone: "",
      path: "M597.167,188.156l0.193,0.294l1.056,2.52l2.496,2.171l5.376,3.344l2.631-0.698l2.227,1.967l2.112,2.639   l2.362,1.313l1.296,1.515l-0.528,3.41l-2.055,5.804l-0.701,3.015l-0.173,1.634l0.144,1.728l0.49,0.987l1.584,1.981l0.346,0.797   l0.077,0.133l0.826,1.38l2.093,1.993l2.304,1.746l1.584,0.74l5.127,0.31l2.304,0.62l1.872,1.088l4.205,3.749l0.661,0.324   l1.662,0.814l5.914,0.796l5.05,1.593l2.784,0.246l2.16-0.442l6.557-2.743l2.823-0.493l13.432,0.493l0.989,0.986l0.518,1.087   l0.384,1.125l0.528,1.049l2.103,2.596l2.247,2.04l2.391,1.339l10.667,2.298l2.064,1.162l1.296,2.323l1.44,3.584l1.786,3.331   l2.333,1.451l2.563,0.933l2.189,2.364l1.728,3.108l1.171,3.207l1.21,12.776l0.816,1.271l0.979,2.894l0.605,3.195l-0.384,2.144   l-2.266-4.414l-2.448-3.818l-2.928-3.43l-5.828-4.759l-2.487-1.392l-2.669-0.995l-5.271-0.731l-4.436-1.461l-2.362-0.315   l-1.325,0.151l-1.603,0.706l-1.094,0.296h-4.532l-2.074,0.888l-3.994,3.338h-2.362l-0.845-0.749l-1.517-2.437l-0.931-1.039   l-1.239-0.498l-3.034-0.529l-3.091-1.688l-2.343,1.31l-3.917,3.521l0.807,3.665l-3.322,3.418l-4.8,2.511l-7.834,1.774l-6.874,4.007   l-9.025,3.351l-2.112,1.553l-4.532,5.015l-2.035,1.432l-1.306,1.69l-0.25,3.335l0.643,4.193l0.086,1.644l-6.365,2.485l-1.181,2.384   l0.288,3.111l1.613,3.122l1.056,1.153l1.68,1.316l0.922,1.159l0.49,1.585l-0.662,0.977l-1.181,0.764l-2.074,1.929l-0.922,0.457   l-0.883,0.645l-0.845,1.572l-0.538,1.841l-0.067,1.384l0.605,3.086l1.354,3.297l0.403,1.789l-0.547,1.783l-1.037,1.144l-0.902,0.75   l-0.653,0.875l-0.23,1.469l0.211,0.856l0.394,0.813l0.317,0.919l-0.115,1.087l-0.499,0.675l-1.92,1.418l-0.72,2.174l0.048,0.962   l0.672,1.062l-0.538,2.011l0.672,2.098l2.688,3.745l-0.144,1.31l-1.623,1.254l-3.053,1.722l-2.976,3.611l-1.172-4.63l-0.5-5.159   l-0.25-6.621l1.695-5.919l-0.116-3.981l-0.512-3.859l-1.61-2.439l-1.768-2.312l-1.542-4.872l-2.109-4.198l-2.158-3.106   l-2.365-2.812l-1-2.559l-0.244-3.021l-2.548-4.392l-2.359-4.577l-0.951-5.165l-2.865-3.883l-5.408-0.885l-5.609,0.08l-4.316-0.379   l-4.097-1.193l-3.432-4.528l-3.341-5.025l-3.39-3.821l-3.688-3.459l-3.213-3.508l-1.079-5.712l4.066,1.647l3.786,2.598l2.256,1.475   l2.097-2.39l2.597-2.63l2.56-2.675l3.329-3.452l4.048-1.332l2.353-2.441l1.799-3.418l3.371-1.978l3.725-0.697l3.585-1.594   l3.359-2.716l3.262-3.301l2.475-4.541l-7.694-4.094l-6.334-6.596l-5.072-5.271l-6.352-2.205l-5.164-3.872l-4.603-5.027   l-2.524-3.292l-2.798-2.638l-6.316-4.775l-6.828-2.04l-4.591-6.683l1.5-7.868l3.518-3.382l3.884-2.459l3.969-0.234l3.847-1.444   l4.249-1.331l3.835-2.287l0.792-2.284l0.555-2.522l1.853-2.091l2.567-0.872l2.615,2.249l0.823,5.783l2.938,2.065l3.329,1.275   l4.706,3.016l4.981,1.79l5.779,0.52l5.542-1.512l4.542-0.814l4.725,0.121L597.167,188.156z M744.338,278.995l-2.218-0.573   l-1.479,0.478l-1.747-1.46l-1.152-2.292l0.269-2.009l1.536,1.209l1.133-0.359l1.037-0.793l1.21-0.057l1.69,1.82l0.528,2.43   L744.338,278.995z M717.149,263.254l-1.757,0.404l-2.343-0.126l0.586-3.77l-3.85-5.248l0.048-3.691l1.44,0.776l1.776-0.587   l0.807,0.965l0.269,3.237l1.152,1.703l1.469,1.331l1.21,2.106l0.115,1.841L717.149,263.254z",
    },
    {
      // 9
      ad: "Şirvan",
      zone: "",
      path: "M491.26,274.149l-2.445,3.466l-1.524,4.716l-4.036-3.369l-2.597-5.221l-3.335-1.684l-3.506-1.256l-0.134-5.794   l-0.317-6.149l-4.646-2.263l-5.243,0.405l-3.475,2.931l-3.286,2.723l-2.567-2.458l-2.012-1.926l-4.158,0.781l-3.213-3.012   l1.036-6.644l2.359-6.399l-4.743,1.837l-4.835,1.175l-0.457-6.249l2.902-7.124l-4.987-4.216l-6.255-1.679l-5.987-1.977   l-5.944-0.643l-2.945,0.241l-3.024-1.013l-4.005-1.39l-4.072-1.129l3.17-3.952l2.999-4.142l2.433-4.55l3.457-2.95l5.359-2.423   l4.56-3.652l0.11-3.581l0.396-3.441l1.53-0.601l1.762-0.327l3.438-2.906l0.384-4.852l-2.865-4.906l-1.207-5.118l0.628-1.91   l1.03-1.64l1.67,0.206l1.622,0.38l0.969-2.496l0.616-2.881l1.323-2.659l1.847-2.155l3.487,0.788l3.536,0.311l3.347,1.423   l3.304,1.879l6.298,3.673l6.413,3.005l8.925,0.638l6.938,6.209l9.547,0.089l9.218,2.659l7.651,3.264l7.895,2.323l6.054,2.947   l5.956,3.297l-1.5,7.868l4.591,6.683l6.828,2.04l6.316,4.775l2.798,2.638l2.524,3.292l4.603,5.027l5.164,3.872l6.352,2.205   l5.072,5.271l6.334,6.596l7.694,4.094l-2.475,4.541l-3.262,3.301l-3.359,2.716l-3.585,1.594l-3.725,0.697l-3.371,1.978   l-1.799,3.418l-2.353,2.441l-4.048,1.332l-3.329,3.452l-2.56,2.675l-2.597,2.63l-2.097,2.39l-2.256-1.475l-3.786-2.598   l-4.066-1.647l-6.481,0.664l-5.749-3.175l-1.555,6.014l-3.432,3.9l-3.871,1.954l-4.054-2.002l-5.066-2.414l-4.841-2.862   l-4.658-1.359L491.26,274.149z",
    },
  ],
};

export const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {
    setZone: (state, action) => {
      let id = action.payload.regId;
      state.value[id].zone = action.payload.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setZone } = regionsSlice.actions;

export default regionsSlice.reducer;
