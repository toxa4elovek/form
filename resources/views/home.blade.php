@extends('layouts.app')

@section('content')
<div class="container">
    <div id="app"></div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">
        var categories = {!! $categories->toJson() !!}
    </script>
@endsection
